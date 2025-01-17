class Marine {
  constructor(_damage = 0, _armor = 0) {
    this.damage = _damage;
    this.armor = _armor;
  }
}

class MarineWeaponUpgrade extends Marine {
  constructor(marine) {
    super(marine.damage + 1, marine.armor);
  }
}

class MarineArmorUpgrade extends Marine {
  constructor(marine) {
    super(marine.damage, marine.armor + 1);
  }
}
