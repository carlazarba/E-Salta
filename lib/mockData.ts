// ============================================================
// lib/mockData.ts
// Datos simulados para la simulación de pago QR
// Basado en Ordenanza 12170 - Municipalidad de Salta Capital
// ============================================================

export type TipoVehiculo = "auto" | "moto";
export type TipoTurno = "diurno" | "nocturno";
export type MetodoPago = "qr" | "tarjeta" | "nfc" | "efectivo";
export type ModoPago = "digital" | "efectivo";
export type EstadoPago = "PENDIENTE" | "PAGADO" | "APROBADO";

export interface ZonaEstacionamiento {
  direccion: string;
  turno: TipoTurno;
  permisionario: string;
}

export interface ParkingData {
  id: string;
  patente: string;
  tipoVehiculo: TipoVehiculo;
  zona: ZonaEstacionamiento;
  horaInicio: Date;
  duracionMinutos: number;
  turno: TipoTurno;
  montoOriginal: number;
  descuentoDigital: number;
  montoDigital: number;
  metodoPago: MetodoPago;
  estado: EstadoPago;
  modoPago: ModoPago;
}

// Tarifas según Ordenanza 12170
export const TARIFA_AUTO_HORA = 700;
export const TARIFA_MOTO_HORA = 300;
export const FRACCION_15MIN_AUTO = 175; // 700 / 4
export const FRACCION_15MIN_MOTO = 75;  // 300 / 4
export const DESCUENTO_DIGITAL = 0.20;

// Horarios de cobro
export const HORARIOS = {
  diurno: {
    label: "Diurno",
    lunVie: "Lunes a viernes de 07:00 a 21:00",
    sabado: "Sábados de 07:00 a 14:00",
  },
  nocturno: {
    label: "Nocturno",
    lunDom: "Lunes a domingo de 22:00 a 05:00",
  },
  libre: "05:00 a 07:00, entre turnos, domingos todo el día",
};

// Zonas de estacionamiento medido - calles reales de Salta Capital
export const ZONAS_ESTACIONAMIENTO: ZonaEstacionamiento[] = [
  { direccion: "Caseros 100", turno: "diurno", permisionario: "Carlos Gómez" },
  { direccion: "Florida 200", turno: "diurno", permisionario: "María Fernández" },
  { direccion: "España 300", turno: "diurno", permisionario: "Roberto Alderete" },
  { direccion: "Alvarado 450", turno: "diurno", permisionario: "Liliana Saravia" },
  { direccion: "Mitre 150", turno: "diurno", permisionario: "Jorge Miranda" },
  { direccion: "Rivadavia 600", turno: "diurno", permisionario: "Ana Quinteros" },
  { direccion: "Balcarce 250", turno: "diurno", permisionario: "Pedro Tolaba" },
  { direccion: "Leguizamón 100", turno: "diurno", permisionario: "Susana Reinoso" },
  { direccion: "20 de Febrero 300", turno: "diurno", permisionario: "Daniel Corregidor" },
  { direccion: "Buenos Aires 200", turno: "diurno", permisionario: "Laura Juárez" },
  { direccion: "Zuviría 500", turno: "diurno", permisionario: "Miguel Alvarray" },
  { direccion: "Ameghino 150", turno: "nocturno", permisionario: "Nancy Sosa" },
  { direccion: "Pellegrini 300", turno: "nocturno", permisionario: "Héctor Moreno" },
];

// Patentes ficticias argentinas
export const PATENTES_MOCK = [
  "AA 123 BB",
  "AB 456 CD",
  "AC 789 EF",
  "AD 246 GH",
  "AE 135 IJ",
  "AF 864 KL",
  "AG 975 MN",
  "AH 531 OP",
  "AJ 429 QR",
  "AK 687 ST",
  "AL 802 UV",
  "AM 193 WX",
  "AN 376 YZ",
];

// Calcular monto según tiempo y tipo de vehículo
export function calcularMonto(
  tipoVehiculo: TipoVehiculo,
  duracionMinutos: number
): number {
  const tarifaHora = tipoVehiculo === "auto" ? TARIFA_AUTO_HORA : TARIFA_MOTO_HORA;
  const fraccion15 = tipoVehiculo === "auto" ? FRACCION_15MIN_AUTO : FRACCION_15MIN_MOTO;

  if (duracionMinutos <= 60) {
    return tarifaHora;
  }

  // Primera hora completa
  let monto = tarifaHora;

  // Minutos restantes después de la primera hora
  const minutosRestantes = duracionMinutos - 60;

  // Fracciones de 15 minutos (se redondea hacia arriba)
  const fracciones = Math.ceil(minutosRestantes / 15);
  monto += fracciones * fraccion15;

  return monto;
}

// Formatear duración en horas y minutos
export function formatDuration(minutos: number): string {
  const horas = Math.floor(minutos / 60);
  const mins = minutos % 60;
  if (horas === 0) return `${mins} min`;
  if (mins === 0) return `${horas} h`;
  return `${horas} h ${mins} min`;
}

// Formatear monto en pesos argentinos
export function formatMoney(monto: number): string {
  return `$${monto.toLocaleString("es-AR", { minimumFractionDigits: 0 })}`;
}

// Formatear fecha
export function formatDate(fecha: Date): string {
  return fecha.toLocaleDateString("es-AR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
}

// Formatear hora
export function formatTime(fecha: Date): string {
  return fecha.toLocaleTimeString("es-AR", {
    hour: "2-digit",
    minute: "2-digit",
  });
}

// Generar ID de operación único
export function generateOperationId(): string {
  const year = new Date().getFullYear();
  const random = Math.random().toString(36).substring(2, 7).toUpperCase();
  return `EJM-${year}-${random}`;
}

// Generar estacionamiento mock aleatorio
export function generateMockParking(
  metodoPago: MetodoPago = "qr"
): ParkingData {
  const zona = ZONAS_ESTACIONAMIENTO[Math.floor(Math.random() * ZONAS_ESTACIONAMIENTO.length)];
  const patente = PATENTES_MOCK[Math.floor(Math.random() * PATENTES_MOCK.length)];
  const tipoVehiculo: TipoVehiculo = Math.random() > 0.3 ? "auto" : "moto";

  // Duración aleatoria entre 15 minutos y 3 horas
  const duracionesPosibles = [15, 30, 45, 60, 75, 90, 105, 120, 135, 150, 165, 180];
  const duracionMinutos = duracionesPosibles[Math.floor(Math.random() * duracionesPosibles.length)];

  const horaInicio = new Date();
  horaInicio.setMinutes(horaInicio.getMinutes() - duracionMinutos);

  const montoOriginal = calcularMonto(tipoVehiculo, duracionMinutos);
  const descuento = Math.round(montoOriginal * DESCUENTO_DIGITAL);
  const montoDigital = montoOriginal - descuento;

  const modoPago: ModoPago = metodoPago === "efectivo" ? "efectivo" : "digital";

  return {
    id: generateOperationId(),
    patente,
    tipoVehiculo,
    zona,
    horaInicio,
    duracionMinutos,
    turno: zona.turno,
    montoOriginal,
    descuentoDigital: descuento,
    montoDigital,
    metodoPago,
    estado: "PENDIENTE",
    modoPago,
  };
}

// Obtener label del tipo de vehículo
export function getTipoVehiculoLabel(tipo: TipoVehiculo): string {
  return tipo === "auto" ? "Automóvil" : "Motocicleta";
}

// Obtener label del método de pago
export function getMetodoPagoLabel(metodo: MetodoPago): string {
  const labels: Record<MetodoPago, string> = {
    qr: "Mercado Pago QR",
    tarjeta: "Tarjeta débito/crédito",
    nfc: "NFC",
    efectivo: "Efectivo",
  };
  return labels[metodo];
}