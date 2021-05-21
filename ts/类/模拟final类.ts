class Message {
  protected constructor(protected msg: string) {}
}
// Cannot extend a class 'Message'. Class constructor is marked as private.
class NewMessage extends Message {}
// Constructor of class 'Message' is private and only accessible within the class declaration.
new Message('test');
Message.create('test');
