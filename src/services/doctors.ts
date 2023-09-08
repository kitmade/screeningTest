import {Doctor} from '../type/data';
import {doctors} from '../utils/data';

export const getDoctors = (name: string = ''): Promise<Doctor[]> =>
  new Promise(res => {
    const doctorsFilterd =
      name.length > 0
        ? doctors.filter(doctor =>
            doctor.name.toLowerCase().includes(name.toLowerCase()),
          )
        : doctors;
    setTimeout(() => {
      res(doctorsFilterd);
    }, 1000);
  });
