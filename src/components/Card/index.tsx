import React, { FC } from 'react';
import moment from 'moment';
import 'moment/locale/en-gb';
import { Tournament } from '../../store/reducers';
import { Button } from '../Button';
import { Text } from '../Text';
import { ButtonsWrapper, CardFrame } from './styled';

moment.locale('en-gb');

type Props = {
  tournament: Tournament;
  onConfirmEdit: (name: string) => void;
  onConfirmDelete: () => void;
};

export const Card: FC<Props> = ({
  tournament,
  onConfirmEdit,
  onConfirmDelete
}) => {
  const { name, organizer, game, participants, startDate } = tournament;

  const handleOnEditClick = (newName: string | null) => {
    if (newName) {
      onConfirmEdit(newName);
    }
  };

  const handleOnDeleteClick = () => {
    if (window.confirm('Do you really want to delete this tournament?')) {
      onConfirmDelete();
    }
  };

  return (
    <CardFrame>
      <Text textType="h6">{name}</Text>
      <Text>Organizer: {organizer}</Text>
      <Text>Game: {game}</Text>
      <Text>
        Participants: {participants.current}/{participants.max}
      </Text>
      <Text>Start: {moment(startDate).format('DD/MM/YYYY, HH:mm:ss')}</Text>
      <ButtonsWrapper>
        <Button
          onClick={() =>
            handleOnEditClick(prompt('New Tournament Name:', name))
          }
        >
          EDIT
        </Button>
        <Button onClick={handleOnDeleteClick}>DELETE</Button>
      </ButtonsWrapper>
    </CardFrame>
  );
};
