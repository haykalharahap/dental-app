const STORAGE_KEYS = {
  APPOINTMENTS: 'dental_appointments',
  THEME: 'dental_theme',
};

export function getAppointments() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEYS.APPOINTMENTS)) || [];
  } catch {
    return [];
  }
}

export function saveAppointment(appointment) {
  const appointments = getAppointments();
  appointment.id = Date.now();
  appointment.bookedAt = new Date().toISOString();
  appointment.status = 'upcoming';
  appointments.push(appointment);
  localStorage.setItem(STORAGE_KEYS.APPOINTMENTS, JSON.stringify(appointments));
  return appointment;
}

export function cancelAppointment(id) {
  const appointments = getAppointments();
  const idx = appointments.findIndex((a) => a.id === id);
  if (idx > -1) {
    appointments[idx].status = 'cancelled';
    localStorage.setItem(STORAGE_KEYS.APPOINTMENTS, JSON.stringify(appointments));
  }
}

export function setAppointments(appointments) {
  localStorage.setItem(STORAGE_KEYS.APPOINTMENTS, JSON.stringify(appointments));
}

export function getTheme() {
  return localStorage.getItem(STORAGE_KEYS.THEME) || 'dark';
}

export function setTheme(theme) {
  localStorage.setItem(STORAGE_KEYS.THEME, theme);
}
