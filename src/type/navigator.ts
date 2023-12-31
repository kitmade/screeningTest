import {Doctor} from './data';

export enum ScreenName {
  Home = 'Home',
  Intro = 'Intro',
  DoctorsDirectory = 'DoctorsDirectory',
  AppointmentVideo = 'AppointmentVideo',
  MedicationDetail = 'MedicationDetail',
}

export enum StackName {
  Main = 'Main',
}

export type MainParamList = {
  [ScreenName.Intro]: undefined;
  [ScreenName.Home]: undefined;
  [ScreenName.DoctorsDirectory]: undefined;
  [ScreenName.AppointmentVideo]: {doctorInfo: Doctor};
  [ScreenName.MedicationDetail]: undefined;
};

export type ApplicationParamList = {
  [StackName.Main]: undefined;
};
