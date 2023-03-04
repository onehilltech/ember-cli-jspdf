import Service from '@ember/service';
import { jsPDF } from 'jspdf';

export default class PdfService extends Service {
  newDocument (opts) {
    return new jsPDF (opts);
  }
}
