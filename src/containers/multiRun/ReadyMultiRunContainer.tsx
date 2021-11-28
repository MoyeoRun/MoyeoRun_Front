import { useNavigation } from '@react-navigation/core';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ReadyMultiRun from '../../components/multiRun/ReadyMultiRun';
import { RootState } from '../../modules';
import { getRoomById } from '../../modules/room';
import { getUserData } from '../../modules/user';

const ReadyMultiRunContainer = () => {
  const { socket, roomId } = useSelector((state: RootState) => state.socket);
  const { room } = useSelector((state: RootState) => state.room);
  const { user } = useSelector((state: RootState) => state.user);
  const [userList, setuserList] = useState<Array<Partial<User>> | null>(null);
  const [connectedUserId, setConnectedUserId] = useState<any>([]);

  const navigation = useNavigation();
  const dispatch = useDispatch();

  useEffect(() => {
    if (connectedUserId && room) {
      console.log(
        room.multiRoomMember
          .map((item) => item.multiRoomUser)
          .filter((user) => {
            return connectedUserId.find((item: any) => item.userId === user.id);
          }),
      );
      setuserList(
        room.multiRoomMember
          .map((item) => item.multiRoomUser)
          .filter((user) => {
            return connectedUserId.find((item: any) => item.userId === user.id);
          }),
      );
    }
  }, [connectedUserId]);

  useEffect(() => {
    if (socket && room && user) {
      socket.emit('ready', { roomId: room.id, user });
      console.log('ready', { roomId: room.id, user });
      socket.on('start', ({ message, roomId }: SocketStart) => {
        navigation.reset({ index: 0, routes: [{ name: 'MultiRun' }] });
      });
      socket.on('roomStatus', ({ connectedUserId }: RoomStatus) => {
        console.log(connectedUserId);
        setConnectedUserId(connectedUserId);
      });
    }
    return () => {
      socket!.off('start');
      socket!.off('roomStatus');
    };
  }, [socket, room]);

  useEffect(() => {
    console.log('ready', roomId);
    if (roomId) {
      dispatch(getRoomById(roomId));
    }
    if (!user) {
      dispatch(getUserData());
    }
  }, [roomId]);

  if (!room || !userList) return null;
  return <ReadyMultiRun room={room} userList={userList} />;
};

export default ReadyMultiRunContainer;
