export interface Truck{
  _id: number | undefined,
  domainId?: string | undefined;
  tare: number | undefined;
  load_capacity: number | undefined;
  maximum_battery_charge: number | undefined;
  autonomy_when_fully_charged: number | undefined;
  fast_charging_time: number | undefined;
  is_active: boolean | undefined;
}
