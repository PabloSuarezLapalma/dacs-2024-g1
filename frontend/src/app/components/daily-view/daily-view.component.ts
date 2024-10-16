import { Component } from '@angular/core';

export type DayOfWeek = 'monday' | 'tuesday' | 'wednesday' | 'thursday' | 'friday';

export interface TimeSlot {
  time: string;
  monday: string;
  tuesday: string;
  wednesday: string;
  thursday: string;
  friday: string;
}

export interface Catedra {
  name: string;
  number: number;
  day: string;
  startTime: string;
  endTime: string;
  aula: string;
}

const TIME_SLOTS: TimeSlot[] = [
  { time: '07:00', monday: '', tuesday: '', wednesday: '', thursday: '', friday: '' },
  { time: '07:30', monday: '', tuesday: '', wednesday: '', thursday: '', friday: '' },
  { time: '08:00', monday: '', tuesday: '', wednesday: '', thursday: '', friday: '' },
  { time: '08:30', monday: '', tuesday: '', wednesday: '', thursday: '', friday: '' },
  { time: '09:00', monday: '', tuesday: '', wednesday: '', thursday: '', friday: '' },
  { time: '09:30', monday: '', tuesday: '', wednesday: '', thursday: '', friday: '' },
  { time: '10:00', monday: '', tuesday: '', wednesday: '', thursday: '', friday: '' },
  { time: '10:30', monday: '', tuesday: '', wednesday: '', thursday: '', friday: '' },
  { time: '11:00', monday: '', tuesday: '', wednesday: '', thursday: '', friday: '' },
  { time: '11:30', monday: '', tuesday: '', wednesday: '', thursday: '', friday: '' },
  { time: '12:00', monday: '', tuesday: '', wednesday: '', thursday: '', friday: '' },
  { time: '12:30', monday: '', tuesday: '', wednesday: '', thursday: '', friday: '' },
  { time: '13:00', monday: '', tuesday: '', wednesday: '', thursday: '', friday: '' },
  { time: '13:30', monday: '', tuesday: '', wednesday: '', thursday: '', friday: '' },
  { time: '14:00', monday: '', tuesday: '', wednesday: '', thursday: '', friday: '' },
  { time: '14:30', monday: '', tuesday: '', wednesday: '', thursday: '', friday: '' },
  { time: '15:00', monday: '', tuesday: '', wednesday: '', thursday: '', friday: '' },
  { time: '15:30', monday: '', tuesday: '', wednesday: '', thursday: '', friday: '' },
  { time: '16:00', monday: '', tuesday: '', wednesday: '', thursday: '', friday: '' },
  { time: '16:30', monday: '', tuesday: '', wednesday: '', thursday: '', friday: '' },
  { time: '17:00', monday: '', tuesday: '', wednesday: '', thursday: '', friday: '' },
  { time: '17:30', monday: '', tuesday: '', wednesday: '', thursday: '', friday: '' },
  { time: '18:00', monday: '', tuesday: '', wednesday: '', thursday: '', friday: '' },
  { time: '18:30', monday: '', tuesday: '', wednesday: '', thursday: '', friday: '' },
  { time: '19:00', monday: '', tuesday: '', wednesday: '', thursday: '', friday: '' },
  { time: '19:30', monday: '', tuesday: '', wednesday: '', thursday: '', friday: '' },
  { time: '20:00', monday: '', tuesday: '', wednesday: '', thursday: '', friday: '' },
  { time: '20:30', monday: '', tuesday: '', wednesday: '', thursday: '', friday: '' },
  { time: '21:00', monday: '', tuesday: '', wednesday: '', thursday: '', friday: '' },
  { time: '21:30', monday: '', tuesday: '', wednesday: '', thursday: '', friday: '' },
  { time: '22:00', monday: '', tuesday: '', wednesday: '', thursday: '', friday: '' },
  { time: '22:30', monday: '', tuesday: '', wednesday: '', thursday: '', friday: '' },
  { time: '23:00', monday: '', tuesday: '', wednesday: '', thursday: '', friday: '' },
  { time: '23:30', monday: '', tuesday: '', wednesday: '', thursday: '', friday: '' },
  { time: '23:45', monday: '', tuesday: '', wednesday: '', thursday: '', friday: '' },
];

const CATEDRAS: Catedra[] = [
  { name: 'Matemáticas', number: 101, day: 'monday', startTime: '08:00', endTime: '09:30', aula: 'Aula 1' },
  { name: 'Física', number: 102, day: 'tuesday', startTime: '09:00', endTime: '10:30', aula: 'Aula 2' },
  { name: 'Química', number: 103, day: 'wednesday', startTime: '10:00', endTime: '11:30', aula: 'Aula 3' },
  { name: 'Biología', number: 104, day: 'thursday', startTime: '11:00', endTime: '12:30', aula: 'Aula 4' },
  { name: 'Historia', number: 105, day: 'friday', startTime: '12:00', endTime: '13:30', aula: 'Aula 5' },
];

@Component({
  selector: 'app-daily-view',
  templateUrl: './daily-view.component.html',
  styleUrls: ['./daily-view.component.css']
})
export class DailyViewComponent {
  displayedColumns: string[] = ['time', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday'];
  dataSource = TIME_SLOTS;
  userName: string = 'Estudiante'; // Aquí puedes obtener el nombre del usuario desde tu servicio de autenticación
  materias: Catedra[] = CATEDRAS; // Lista de materias a las que está inscrito el alumno

  constructor() {
    this.populateCatedras();
  }

  populateCatedras() {
    CATEDRAS.forEach(catedra => {
      const startIndex = TIME_SLOTS.findIndex(slot => slot.time === catedra.startTime);
      const endIndex = TIME_SLOTS.findIndex(slot => slot.time === catedra.endTime);

      for (let i = startIndex; i < endIndex; i++) {
        const slot = TIME_SLOTS[i];
        if (slot) {
          slot[catedra.day as DayOfWeek] = `${catedra.name} (${catedra.number}) - ${catedra.aula}`;
        }
      }
    });
  }

  getTooltip(catedra: Catedra): string {
    return `${catedra.name} (${catedra.number})\nHorario: ${catedra.startTime} - ${catedra.endTime}\nDía: ${catedra.day.charAt(0).toUpperCase() + catedra.day.slice(1)}`;
  }
}