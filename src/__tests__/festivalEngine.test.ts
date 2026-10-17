import { describe, it, expect } from 'vitest';
import {
  resolveActiveFestivalId,
  getFestivalResolvedDates,
  addDays,
  FESTIVAL_METADATA,
} from '../config/festivalDates';

describe('Festival Theme Engine Acceptance Tests', () => {
  it('2026-10-18 -> navratri active', () => {
    // Navratri core: 2026-10-11 to 2026-10-19. Priority: 9.
    // Dussehra lead starts 2026-10-18. Priority: 8.
    // Navratri priority (9) beats Dussehra (8).
    const active = resolveActiveFestivalId('2026-10-18');
    expect(active).toBe('navratri');
  });

  it('2026-10-20 -> dussehra active', () => {
    // Navratri ended 2026-10-19 (tailDays = 0).
    // Dussehra core: 2026-10-20. Priority: 8.
    // Diwali lead starts 2026-10-23.
    const active = resolveActiveFestivalId('2026-10-20');
    expect(active).toBe('dussehra');
  });

  it('2026-10-26 -> diwali active (lead days)', () => {
    // Diwali 2026 core: 2026-11-06 to 2026-11-10.
    // Lead days = 14 (starts 2026-10-23). Priority: 10.
    // 2026-10-26 is within lead days.
    const active = resolveActiveFestivalId('2026-10-26');
    expect(active).toBe('diwali');
  });

  it('2026-11-12 -> diwali still active (tail), 2026-11-14 -> null', () => {
    // Diwali 2026 core ends 2026-11-10.
    // Tail days = 3 (active until 2026-11-13).
    const active12 = resolveActiveFestivalId('2026-11-12');
    expect(active12).toBe('diwali');

    // On 2026-11-14, tail has expired and no other festival is active.
    const active14 = resolveActiveFestivalId('2026-11-14');
    expect(active14).toBeNull();
  });

  it('2026-12-25 -> christmas, 2027-01-01 -> newYear', () => {
    // Christmas 2026: core 2026-12-25. Priority: 6.
    // New Year lead starts 2026-12-26. On Dec 25, New Year has not started.
    const activeChristmas = resolveActiveFestivalId('2026-12-25');
    expect(activeChristmas).toBe('christmas');

    // On 2027-01-01:
    // Christmas ended 2026-12-27.
    // New Year 2027 active: 2026-12-26 to 2027-01-03.
    const activeNewYear = resolveActiveFestivalId('2027-01-01');
    expect(activeNewYear).toBe('newYear');
  });

  it('2027-03-21 -> holi (lead days)', () => {
    // Holi 2027 core: 2027-03-22.
    // Lead days = 4 (starts 2027-03-18).
    // 2027-03-21 is within lead days.
    const activeHoli = resolveActiveFestivalId('2027-03-21');
    expect(activeHoli).toBe('holi');
  });

  it('A date with no festival returns null', () => {
    // Mid-summer date in June
    const activeJune = resolveActiveFestivalId('2026-06-15');
    expect(activeJune).toBeNull();

    // Random non-festival date in April
    const activeApril = resolveActiveFestivalId('2027-04-10');
    expect(activeApril).toBeNull();
  });

  it('verifies lead, tail, and priority metadata for all festivals', () => {
    expect(FESTIVAL_METADATA.diwali.priority).toBe(10);
    expect(FESTIVAL_METADATA.navratri.priority).toBe(9);
    expect(FESTIVAL_METADATA.dussehra.priority).toBe(8);
    expect(FESTIVAL_METADATA.ganeshChaturthi.priority).toBe(8);
    expect(FESTIVAL_METADATA.holi.priority).toBe(8);
    expect(FESTIVAL_METADATA.eidUlFitr.priority).toBe(8);
    expect(FESTIVAL_METADATA.rakshaBandhan.priority).toBe(7);
    expect(FESTIVAL_METADATA.christmas.priority).toBe(6);
    expect(FESTIVAL_METADATA.newYear.priority).toBe(6);
    expect(FESTIVAL_METADATA.republicDay.priority).toBe(5);
    expect(FESTIVAL_METADATA.independenceDay.priority).toBe(5);
    expect(FESTIVAL_METADATA.makarSankranti.priority).toBe(5);

    expect(FESTIVAL_METADATA.diwali.leadDays).toBe(14);
    expect(FESTIVAL_METADATA.diwali.tailDays).toBe(3);
    expect(FESTIVAL_METADATA.navratri.leadDays).toBe(2);
    expect(FESTIVAL_METADATA.navratri.tailDays).toBe(0);
    expect(FESTIVAL_METADATA.christmas.leadDays).toBe(10);
    expect(FESTIVAL_METADATA.christmas.tailDays).toBe(2);
    expect(FESTIVAL_METADATA.newYear.leadDays).toBe(5);
    expect(FESTIVAL_METADATA.newYear.tailDays).toBe(2);
  });
});
