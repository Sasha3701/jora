import { expect, test, describe } from 'vitest'
import dayjs from 'dayjs';

import { checkTaskExpired } from './index';

describe('checkTaskExpired', () => {
  test('Задача не просрочена', () => {
    const date = dayjs().add(1, 'day').valueOf();

    expect(checkTaskExpired(date)).toBeFalsy();
  })

  test('Задача просрочена', () => {
    const date = dayjs().subtract(1, 'day').valueOf();

    expect(checkTaskExpired(date)).toBeTruthy();
  })

  test('Текущая дата последний день, задача не просрочена', () => {
    const date = dayjs().valueOf();

    expect(checkTaskExpired(date)).toBeFalsy();
  })
})
