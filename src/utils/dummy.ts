import { faBoltLightning, faBox, faTruck } from "@fortawesome/free-solid-svg-icons";
import { Payment, Shipment } from "types";

export const shipments: Shipment[] = [
  {
    name: 'courier',
    fullName: 'SuperKurier',
    icon: faTruck,
    price: 20.00,
  }, 
  {
    name: 'post',
    fullName: 'Szybka Poczta',
    icon: faBox,
    price: 8.00,
  }, 
  {
    name: 'teleport',
    fullName: 'Teleport',
    icon: faBoltLightning,
    price: 0.00,
  },
];

export const payments: Payment[] = [
  {
    name: 'payme',
    fullName: 'Payme',
  },
  {
    name: 'transakcje25',
    fullName: 'Transakcje25',
  }
]