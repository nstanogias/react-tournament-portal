import React from 'react';
import ReactDOM from 'react-dom';
import { Provider, useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import GlobalStyle from './GlobalStyle';
import store from './store';
import Container from './components/Container/Container';
import { Text } from './components/Text';
import { Input } from './components/Input';
import { Card } from './components/Card';
import { Button } from './components/Button';
import { Tournament, TournamentsState } from './store/reducers';
import {
  addTournament,
  deleteTournament,
  editTournament,
  getTournaments
} from './store/action-creators';
import { Styled } from './components/Text/styled';
import { Grid } from './components/Card/styled';

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const CenteredWrapper = styled.div`
  margin-top: 48px;
  text-align: center;
`;

const App: React.FC = () => {
  const tournaments = useSelector(
    (state: TournamentsState) => state.tournaments
  );
  const loading = useSelector((state: TournamentsState) => state.loading);
  const error = useSelector((state: TournamentsState) => state.error);
  const dispatch = useDispatch();

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
