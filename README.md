# 🚗 SEM Salta — Estacionamiento Medido Inteligente

> Sistema de Estacionamiento Medido Inteligente para la Municipalidad de Salta Capital. Landing page demostrativa + simulador de pago QR. Proyecto presentado en Hackathon Municipal.

---

## 🔗 Enlaces

- **Landing page:** [https://e-salta.vercel.app](https://e-salta.vercel.app)
- **Simulador de pago QR:** [https://e-salta.vercel.app/simulador](https://e-salta.vercel.app/simulador)
- **Repositorio:** [https://github.com/carlazarba/E-Salta](https://github.com/carlazarba/E-Salta)

---

## 📋 Tabla de contenidos

- [Funcionamiento actual](#-funcionamiento-actual)
- [Problema central](#-problema-central)
- [Flujo completo de pago](#-flujo-completo-de-pago-para-el-conductor)
- [Rol del permisionario](#-rol-del-permisionario-en-el-nuevo-sistema)
- [Cumplimiento de la Ordenanza 12.170](#-cumplimiento-de-la-ordenanza-12170)
- [Integración y accesibilidad](#-integración-con-mercadopago-u-otra-plataforma-de-pagos)
- [Tecnologías](#-tecnologías)
- [Estructura del proyecto](#-estructura-del-proyecto)
- [Instalación y ejecución](#-instalación-y-ejecución)

---

## 🔄 Funcionamiento actual

El SEM se apoya en aproximadamente **900 permisionarios**, personas jubiladas o con alguna discapacidad que la Municipalidad ha autorizado para gestionar el cobro del estacionamiento en una cuadra del área habilitada (hasta 100 metros lineales por permisionario). No se encuentran en relación de dependencia con el Municipio: son trabajadores independientes cuya actividad está regulada y concesionada.

El operativo se sostiene sobre **talonarios físicos impresos** que los permisionarios adquieren en la Municipalidad a un costo equivalente al **20 % de la recaudación total** (su "cuota" al Municipio). Cada ticket contiene:

- Hora de inicio del estacionamiento
- Hora de finalización del estacionamiento
- Importe cobrado (calculado manualmente por el permisionario)
- Dominio (para identificar la patente del vehículo)
- Legajo (para identificar al permisionario)

El cobro puede ser **prepago** (al estacionar) o **pospago** (al retirar el vehículo).

### Tarifas vigentes (Ordenanza 12.170)

| Concepto | Monto |
|---|---|
| Automóviles y camionetas | $700 / hora |
| Motocicletas | $300 / hora |
| Bicicletas | Gratuito |
| Fraccionamiento (a partir de la 2da hora) | Cada 15 min |
| Descuento por pago digital | 20 % |

> La tolerancia es de 5 minutos. Las tarifas son actualizables periódicamente.

### Horarios de cobro

| Turno | Días | Horario |
|---|---|---|
| Diurno | Lunes a viernes | 07:00 a 21:00 |
| Diurno | Sábados | 07:00 a 14:00 |
| Nocturno | Lunes a domingo | 22:00 a 05:00 |
| Libre | Fuera de estos horarios | Sin cobro |

Si el conductor abona una fracción horaria completa pero se retira antes de que se cumpla el tiempo total adquirido, puede estacionarse en cualquier otra cuadra habilitada del microcentro, sin abonar nada adicional, hasta que se cumpla la hora completa.

### Disposiciones de la ordenanza

La propia ordenanza habilita expresamente el **pago mediante aplicaciones móviles** autorizadas por el Ejecutivo Municipal y cualquier otro medio de pago electrónico que se habilite en el futuro. Además, establece dos disposiciones operativas clave:

1. **Incentivo al pago digital:** Descuento del 20 % para pagos digitales. La diferencia es absorbida por la Municipalidad desde su porción del 20 %, sin afectar el ingreso del permisionario.
2. **Fraccionamiento tarifario:** Cada 15 minutos a partir de la segunda hora de estadía, aplicable a todos los tipos de vehículos y en ambos turnos (diurno y nocturno).
3. **Zonificación nocturna:** El turno nocturno rige en zonas específicas: inmediaciones de locales de diversión, Paseo Balcarce, Paseo Güemes, Plaza Alvarado y las que en el futuro determine el Ejecutivo Municipal.

---

## ⚠️ Problema central

El sistema de talonarios manuales, aunque sencillo de operar, presenta limitaciones estructurales que afectan tanto a la recaudación municipal como al control del servicio:

### Ausencia total de trazabilidad

Ningún pago queda registrado electrónicamente. La Municipalidad no cuenta con datos en tiempo real sobre recaudación, ocupación de espacios ni comportamiento de la demanda.

### Control prácticamente nulo

La normativa prevé mecanismos de control, pero en la práctica no existen inspectores que los apliquen. En algunos casos los permisionarios no entregan el ticket al conductor; en otros, el monto cobrado no coincide con el registrado. El conductor que no desea pagar tampoco enfrenta consecuencias prácticas inmediatas.

### Infracción frecuente y silenciosa

La ordenanza establece claramente los horarios en que el cobro está permitido, pero su desconocimiento generalizado —tanto entre vecinos como entre algunos permisionarios— permite que cobros indebidos ocurran con frecuencia, sin que el sistema pueda prevenirlos ni detectarlos.

### Costos operativos y fricción innecesaria

Los permisionarios deben trasladarse físicamente a la Municipalidad para comprar los talonarios, generando desplazamientos, tiempos muertos y costos logísticos para ambas partes.

### Exclusión de medios modernos

El sistema actual no admite ningún medio de pago digital. Esto limita la experiencia del conductor y reduce las posibilidades de auditoría y transparencia.

---

## 💳 Flujo completo de pago para el conductor

1. El **permisionario** ve al auto estacionarse y anota su matrícula en la app. La app automáticamente registra el horario de inicio del estacionamiento.

2. Cuando el permisionario ve que el auto está por irse, en la app finaliza el **cronómetro** de estacionamiento. La app, de acuerdo al horario de inicio y de finalización y la reglamentación de la ordenanza respecto a los precios actualizados y descuento por pago digital, calcula cuánto tiene que pagar el conductor.

3. El conductor puede pagar con los siguientes **medios de pago**:

   - Escanear QR a través de MercadoPago
   - Escanear QR con otra app
   - Tarjeta de débito y tarjeta de crédito a través de Mercado Pago
   - NFC de la tarjeta
   - Efectivo

### Pago digital (20 % de descuento)

Se cumple con la ordenanza: la diferencia del descuento es absorbida por la Municipalidad desde su porción del 20 %, **sin afectar el ingreso del permisionario**. El pago se deposita automáticamente en la cuenta de MercadoPago del permisionario.

### Pago en efectivo (sin descuento)

No hay descuento por pago digital. El monto de "cuota" al Municipio **se le descuenta de la cuenta de MercadoPago al permisionario**.

---

## 👤 Rol del permisionario en el nuevo sistema

**No busca reemplazar al "trapito" sino formalizarlo.**

El permisionario seguiría cumpliendo con su rol como ahora, con la diferencia de que el registro en vez de con los talonarios sería con la app.

Ya no hace falta que vaya todos los meses a comprar el talonario, sino **una única vez** para formalizar su registro en la app, capacitarse en su uso y, en caso de no contar con un celular, a retirar su **cyberdeck** con la app.

### Mecanismo del registro digital de pago

El permisionario ya registró la patente del auto al verlo estacionarse y marcó "finaliza" cuando se está por ir. Esto implica que ya existe el registro de ese auto. Al registrar el pago, simplemente se pone "pago en efectivo". El monto del pago lo calcula la app.

En caso de pagar en efectivo, no hay descuento por pago digital y ese monto de "cuota" al Municipio se le descuenta de la cuenta de MercadoPago al permisionario.

---

## 📜 Cumplimiento de la Ordenanza 12.170

### Art. 9° — Sanciones al permisionario

La app va a tener para el usuario un **botón para realizar reclamos**, por ejemplo:

- Denunciar a quienes cobran en cuadras de estacionamiento gratuito
- Cobranzas fuera de horario
- Una persona que no corresponde a esa cuadra
- Cuando el permisionario no porte ni exhiba la credencial identificatoria

### Art. 10° — Control de funcionamiento — Régimen de supervisión

El permisionario puede denunciar a conductores que se nieguen a pagar.

**De esta forma se realiza un doble control.**

---

## 🔌 Integración con MercadoPago u otra plataforma de pagos

- Escanear QR a través de MercadoPago
- Escanear QR con otra app
- Tarjeta de débito y tarjeta de crédito a través de Mercado Pago

### Velocidad de transacción

Pocos segundos, a través del sistema de MercadoPago.

---

## ♿ Accesibilidad

- **Interfaz súper simple e intuitiva**
- Versión de accesibilidad (tamaño y color de la letra, asistencia por voz, etc.)

### Accesibilidad económica + economía circular + reciclaje

En caso de que algunos permisionarios no tengan celular, la propuesta innovadora es que en espacios de aprendizaje de tecnicaturas en reparación de PC, tecnicaturas en informática o en tecnicaturas en electrónica (por ejemplo la UPATECO), se **reciclen residuos informáticos** (carcasas de celulares viejos — modelos táctiles sí o sí — placas, etc.) para crear **cyberdecks**, es decir, computadoras portátiles construidas de forma totalmente artesanal diseñadas para usos concretos. En este caso, sólo tendrían la app SEM Salta.

---

## 🛠 Tecnologías

| Capa | Tecnología |
|---|---|
| Frontend | Next.js 14 + TypeScript |
| Estilos | Tailwind CSS |
| Animaciones | Framer Motion |
| Iconos | Lucide React |
| QR | qrcode.react |
| Deploy | Vercel |

---

## 📁 Estructura del proyecto
