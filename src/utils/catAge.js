const MONTHS_EN = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
];

/**
 * birthday: 'YYYY-MM'
 * Returns { age, ageZh, birthdayDisplay, birthdayDisplayZh }
 */
export function computeAge(birthday) {
  if (!birthday) return { age: null, ageZh: null, birthdayDisplay: null, birthdayDisplayZh: null };

  const [year, month] = birthday.split('-').map(Number);
  const now = new Date();

  let years = now.getFullYear() - year;
  let months = now.getMonth() + 1 - month;

  if (months < 0) {
    years -= 1;
    months += 12;
  }

  let age, ageZh;
  if (years >= 1) {
    const yrLabel = years === 1 ? 'yr' : 'yrs';
    age   = months > 0 ? `${years} ${yrLabel} ${months} mo` : `${years} ${yrLabel}`;
    ageZh = months > 0 ? `${years}岁${months}个月` : `${years}岁`;
  } else {
    age   = `${months} mo`;
    ageZh = `${months}个月`;
  }

  return {
    age,
    ageZh,
    birthdayDisplay:   `${MONTHS_EN[month - 1]} ${year}`,
    birthdayDisplayZh: `${year}年${month}月`,
  };
}
