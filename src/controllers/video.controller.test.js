import mongoose from 'mongoose';
import { MongoMemoryServer } from 'mongodb-memory-server';
import * as videoController from './video.controller'; 
import Video from '../models/video.model'; 

const mongod = new MongoMemoryServer();

beforeAll(async () => {
  const uri = await mongod.getConnectionString();
  await mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
});

afterEach(async () => {
  await Video.deleteMany();
});

afterAll(async () => {
  await mongoose.disconnect();
  await mongod.stop();
});

describe('createVideo function', () => {
  it('should create a new video', async () => {
    const req = {
      body: {
        title: 'Test Video',
        description: 'This is a test video.',
        credits: 'John Doe',
        date: '2022-01-01T00:00:00Z',
      },
      user: {
        id: mongoose.Types.ObjectId(),
      },
    };

    const res = {
      json: jest.fn(),
    };

    await videoController.createVideo(req, res);

    expect(res.json).toHaveBeenCalledWith(expect.objectContaining({
      title: 'Test Video',
      description: 'This is a test video.',
      credits: 'John Doe',
      date: expect.any(Date),
      user: req.user.id,
    }));
  });

});
