export class ShopResponse {
  constructor(public jwtToken: string, public name: string, public email: string,
              public contactNo: string, public contactPersonName: string) {}
}
