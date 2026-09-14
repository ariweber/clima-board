export function getWeatherDescription(code: number): string {
  if (code === 0) return '☀️ בהיר' 
  if (code <= 3) return '⛅ מעונן חלקית'
  if (code <= 48) return '🌫️ ערפל'
  if (code <= 57) return '🌦️ טפטוף'
  if (code <= 67) return '🌧️ גשם'
  if (code <= 77) return '🌨️ שלג'
  if (code <= 82) return '🌧️ ממטרים'
  return '⛈️ סופת רעמים'
}
