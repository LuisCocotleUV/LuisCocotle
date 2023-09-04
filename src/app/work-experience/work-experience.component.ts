workExperience : Array<any> = [];

constructor() { }

ngOnInit(): void { }
  
let work1 = {
  fecha : "2018 - 2022",
  ubicacion : "Orizaba, Ver",
  puesto : "CEO",
  empresa : "Waves",
  logros : [
    { descripcion : "Dron autonomo" },
    { descripcion : "Cluster GPU" },
  ]
};

let work2  = {
  fecha : "2018 - 2022",
  ubicacion : "Orizaba, Ver",
  puesto : "CEO",
  empresa : "Waves",
  logros : [
    { descripcion : "Dron autonomo" },
    { descripcion : "Cluster GPU" },
  ]
};

this.workExperience.push(work1)
this.workExperience.push(work2)