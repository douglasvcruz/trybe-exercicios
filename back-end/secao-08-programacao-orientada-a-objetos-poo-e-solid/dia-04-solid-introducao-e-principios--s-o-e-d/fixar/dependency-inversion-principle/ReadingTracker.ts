import EmailNotification from './EmailNotification';
import Notificator from './Notificator';

export default class ReadingTracker {
  private booksRead: number;
  constructor(
    private readingGoal: number,
    public notificator: Notificator = new EmailNotification('Douglas'),
  ) {
    this.booksRead = 0;
  }

  trackReadings(readsCount: number): void {
    this.booksRead += readsCount;
    if (this.booksRead >= this.readingGoal) {
      this.notificator.sendNotification(
        'Congratulations! You\'ve reached your reading goal!',
      );
      return;
    }
    this.notificator.sendNotification('There are still some books to go!');
  }
  // Aqui viriam mais métodos, que fogem o escopo deste exercício
}

const test = new ReadingTracker(8);

test.trackReadings(1);
test.trackReadings(9);