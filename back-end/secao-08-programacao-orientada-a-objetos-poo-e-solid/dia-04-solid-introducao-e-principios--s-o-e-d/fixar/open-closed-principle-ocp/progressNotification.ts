type Notification = {
  type: string,
  send: (message: string) => void
};

const consoleNotification:Notification = {
  type: 'Console',
  send: (message: string) => console.log('Console: ', message),
};

const emailNotification:Notification = {
  type: 'Email',
  send: (message: string) => console.log('Email: ', message),
};

const phoneNotification:Notification = {
  type: 'Phone',
  send: (message: string) => console.log('Phone: ', message),
};

const testNotification:Notification = {
  type: 'Test',
  send: (message: string) => console.log('Test: ', message),
};

const notifications: Notification[] = [
  consoleNotification,
  emailNotification,
  phoneNotification,
];

export default function progressNotification(
  message: string,
  type_ = 'Console',
  notificationsArray: Notification[] = notifications,
): void {
  notificationsArray.forEach((notification) => {
    if (notification.type === type_) {
      notification.send(message);
    }
  });
}

progressNotification('DEU CERTO');
progressNotification('Testando', 'Test', [testNotification]);
