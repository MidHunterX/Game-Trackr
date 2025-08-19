import { HumanPlaytimePipe } from './human-playtime.pipe';

describe('HumanPlaytimePipe', () => {
  it('create an instance', () => {
    const pipe = new HumanPlaytimePipe();
    expect(pipe).toBeTruthy();
  });
});
