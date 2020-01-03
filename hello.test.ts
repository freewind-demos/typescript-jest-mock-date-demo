import mockDate from 'mockdate';
import format from 'date-fns/format';

afterEach(() => mockDate.reset());

describe('mockDate', () => {
  it('mocks a date', () => {
    mockDate.set(new Date('2010-11-22'));

    const date = new Date();
    expect(format(date, 'yyyy-MM-dd')).toEqual('2010-11-22')
  })
})
