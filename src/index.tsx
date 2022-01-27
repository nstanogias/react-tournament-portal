import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import styled from 'styled-components';
import GlobalStyle from './GlobalStyle';
import { store } from './store/store';
import Container from './components/Container/Container';
import { Text } from './components/Text/Text';
import { Input } from './components/Input/Input';
import { Card } from './components/Card/Card';
import { Button } from './components/Button/Button';
import { Tournament } from './store/reducers';
import {
  addTournament,
  deleteTournament,
  editTournament,
  getTournaments
} from './store/action-creators';
import { Styled } from './components/Text/styled';
import { Grid } from './components/Card/styled';
import { useAppDispatch, useAppSelector } from './hooks';

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const CenteredWrapper = styled.div`
  margin-top: 48px;
  text-align: center;
`;

const App: React.FC = () => {
  const tournaments = useAppSelector(state => state.tournaments);
  const loading = useAppSelector(state => state.loading);
  const error = useAppSelector(state => state.error);
  const dispatch = useAppDispatch();

  const handleCreateTournament = (name: string | null) => {
    if (name) {
      dispatch(addTournament(name));
    }
  };

  const handleEditTournament = (tournament: Tournament) => {
    dispatch(editTournament(tournament));
  };

  const handleDeleteTournament = (id: string) => {
    dispatch(deleteTournament(id));
  };

  const handleRetry = () => {
    dispatch(getTournaments(''));
  };

  return (
    <Container>
      <Text textType="h4">Tournaments</Text>
      <Wrapper>
        <Input placeholder="Search tournament ..."></Input>
        <Button
          onClick={() => handleCreateTournament(prompt('Tournament Name:'))}
        >
          CREATE TOURNAMENT
        </Button>
      </Wrapper>
      {loading && (
        <Styled.CenteredTextWrapper>
          <Text>Loading tournaments...</Text>
        </Styled.CenteredTextWrapper>
      )}
      {error && (
        <CenteredWrapper>
          <Text>Something went wrong.</Text>
          <Button onClick={handleRetry}>RETRY</Button>
        </CenteredWrapper>
      )}
      {tournaments.length > 0 && (
        <Grid>
          {tournaments.map((tournament: Tournament) => (
            <Card
              key={tournament.id}
              tournament={tournament}
              onConfirmEdit={(name: string) =>
                handleEditTournament({ ...tournament, name })
              }
              onConfirmDelete={() => handleDeleteTournament(tournament.id)}
            ></Card>
          ))}
        </Grid>
      )}
      {tournaments.length === 0 && (
        <Styled.CenteredTextWrapper>
          <Text>No tournaments found</Text>
        </Styled.CenteredTextWrapper>
      )}
    </Container>
  );
};

ReactDOM.render(
  <Provider store={store}>
    <GlobalStyle />
    <App />
  </Provider>,
  document.getElementById('root')
);
