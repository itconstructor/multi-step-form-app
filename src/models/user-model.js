
export class User{
    constructor(
        name = '',
        age = undefined,
        country = { countryName: '', currency: ''},
        userPackage = { name: '', additionalPrice: '' },
        totalValue = undefined,
        totalValueWithoutPackagePrice = undefined) {
        this.name = name;
        this.age = age;
        this.country = country;
        this.userPackage = userPackage;
        this.totalValue = totalValue
        this.totalValueWithoutPackagePrice = totalValueWithoutPackagePrice
  }
}