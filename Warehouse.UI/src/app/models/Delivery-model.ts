export interface Delivery {
  id: string;
  dateOfDelivery: Date;
  deliveryMass: number;
  warehouseId: number;
  placementTime: number;
  receiveTime: number;
}
