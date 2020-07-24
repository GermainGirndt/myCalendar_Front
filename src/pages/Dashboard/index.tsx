import React, { useState, useEffect } from 'react';

import Header from '../../components/Header';
import Panel from '../../components/Panel';
import Calendar from '../../components/Calendar';

import { Container } from './styles';

const Dashboard: React.FC = () => {
  useEffect(() => {
    async function loadTransactions(): Promise<void> {
      // TODO
    }

    loadTransactions();
  }, []);

  return (
    <>
      <Header />
      <Container>
        <Panel />
        <Calendar />
      </Container>
    </>
  );
};

export default Dashboard;
