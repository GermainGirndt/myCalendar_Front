import React, { useState, useEffect } from 'react';

import income from '../../assets/income.svg';
import outcome from '../../assets/outcome.svg';
import total from '../../assets/total.svg';

import { PlusCircle, MinusCircle, Link } from 'react-feather';
import api from '../../services/api';

import Header from '../../components/Header';

import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';

import {
  Container,
  CardContainer,
  Card,
  ImageContainer,
  TableContainer,
  ProfilImg,
  TextContainer,
  CalendarContainer,
} from './styles';

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
        <CardContainer>
          <ImageContainer>
            <ProfilImg />
          </ImageContainer>
          <Card>
            <TextContainer design="create">
              <PlusCircle />
              <p>Avaiable Time</p>
            </TextContainer>
          </Card>
          <Card>
            <TextContainer design="delete">
              <MinusCircle />
              <p>Available Time</p>
            </TextContainer>
          </Card>
          <Card>
            <TextContainer design="link">
              <Link />
              <p>Copy Link</p>
            </TextContainer>
          </Card>
        </CardContainer>

        <CalendarContainer>
          <FullCalendar plugins={[dayGridPlugin]} initialView="dayGridMonth" />
        </CalendarContainer>
      </Container>
    </>
  );
};

export default Dashboard;
