/*
 Licensed to the Apache Software Foundation (ASF) under one
 or more contributor license agreements.  See the NOTICE file
 distributed with this work for additional information
 regarding copyright ownership.  The ASF licenses this file
 to you under the Apache License, Version 2.0 (the
 "License"); you may not use this file except in compliance
 with the License.  You may obtain a copy of the License at
 
 http://www.apache.org/licenses/LICENSE-2.0
 
 Unless required by applicable law or agreed to in writing,
 software distributed under the License is distributed on an
 "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 KIND, either express or implied.  See the License for the
 specific language governing permissions and limitations
 under the License.
 */

var BibliaKJV = {
	version: "KJV",
	genesis:{}, // 1
	exodo:{}, // 2
	levitico:{}, // 3
	numeros:{}, // 4
	deuteronomio:{}, // 5
	josue:{}, // 6
	jueces:{}, // 7
	rut:{}, // 8
	samuel1:{}, // 9
	samuel2:{}, // 10
	reyes1:{}, // 11
	reyes2:{}, // 12
	cronicas1:{}, // 13
	cronicas2:{}, // 14
	esdras:{}, // 15
	nehemias:{}, // 16
	ester:{}, // 17
	job:{}, // 18
	salmos:{}, // 19
	proverbios:{}, // 20 
	eclesiastes:{}, // 21
	cantares:{}, // 22
	isaias:{}, // 23
	jeremias:{}, // 24
	lamentaciones:{}, // 25
	ezequiel:{}, // 26
	daniel:{}, // 27
	oseas:{}, // 28
	joel:{}, // 29
	amos:{}, // 30
	abdias:{}, // 31
	jonas:{}, // 32
	miqueas:{}, // 33
	nahum:{}, // 34
	habacuc:{}, // 35
	sofonias:{}, // 36
	hageo:{}, // 37
	zacarias:{}, // 38
	malaquias:{}, // 39
	mateo:{}, // 40
	marcos:{}, // 41
	lucas:{}, // 42
	juan:{}, // 43
	hechos:{}, // 44
	romanos:{}, // 45
	corintios1:{}, // 46
	corintios2:{}, // 47
	galatas:{}, // 48
	efesios:{}, // 49
	filipenses:{}, // 50
	colosenses:{}, // 51 
	tesalonicenses1:{}, // 52
	tesalonicenses2:{}, // 53
	timoteo1:{}, // 54
	timoteo2:{}, // 55
	tito:{}, // 56
	filemon:{}, // 57
	hebreos:{}, // 58
	santiago:{}, // 59
	pedro1:{}, // 60
	pedro2:{}, // 61
	juan1:{}, // 62
	juan2:{}, // 63
	juan3:{}, // 64
	judas:{}, // 65
	apocalipsis:{}, // 66
};

// Génesis
BibliaKJV.getNomLibGenesis = function(){
	return BibliaKJV.genesis.libro;
}

BibliaKJV.getNumCapGenesis = function(){
	return BibliaKJV.genesis.numCapitulos;
}

BibliaKJV.getNumVerCapGenesis = function(id){
	var cap = BibliaKJV.genesis[id];	// id = c1, por ejemplo
	
	if (cap == null){
		return null;
	}
	
	return cap.numVersiculos;
}


BibliaKJV.getVersiculoGenesis = function(id, name){
	var cap = BibliaKJV.genesis[id];	// id = c1, por ejemplo

	if (cap == null){
		return null;
	}

	var versiculos = cap.versiculos;
	var i = 0;
	var n = versiculos.length;
	for (i=0; i<n; i++){
		if (versiculos[i].name == name){ // name = 111, por ejemplo
			return versiculos[i];
		}
	}
	
	return null;

}
// Exodo
BibliaKJV.getNomLibExodo = function(){
	return BibliaKJV.exodo.libro;
}

BibliaKJV.getNumCapExodo = function(){
	return BibliaKJV.exodo.numCapitulos;
}

BibliaKJV.getNumVerCapExodo = function(id){
	var cap = BibliaKJV.exodo[id];	
	
	if (cap == null){
		return null;
	}
	
	return cap.numVersiculos;
}

BibliaKJV.getVersiculoExodo = function(id, name){
	var cap = BibliaKJV.exodo[id];	

	if (cap == null){
		return null;
	}

	var versiculos = cap.versiculos;
	var i = 0;
	var n = versiculos.length;
	for (i=0; i<n; i++){
		if (versiculos[i].name == name){ 
			return versiculos[i];
		}
	}
	
	return null;

}
// Levitico
BibliaKJV.getNomLibLevitico = function(){
	return BibliaKJV.levitico.libro;
}

BibliaKJV.getNumCapLevitico = function(){
	return BibliaKJV.levitico.numCapitulos;
}

BibliaKJV.getNumVerCapLevitico = function(id){
	var cap = BibliaKJV.levitico[id];	
	
	if (cap == null){
		return null;
	}
	
	return cap.numVersiculos;
}

BibliaKJV.getVersiculoLevitico = function(id, name){
	var cap = BibliaKJV.levitico[id];	

	if (cap == null){
		return null;
	}

	var versiculos = cap.versiculos;
	var i = 0;
	var n = versiculos.length;
	for (i=0; i<n; i++){
		if (versiculos[i].name == name){ 
			return versiculos[i];
		}
	}
	
	return null;

}
// Numeros
BibliaKJV.getNomLibNumeros = function(){
	return BibliaKJV.numeros.libro;
}

BibliaKJV.getNumCapNumeros = function(){
	return BibliaKJV.numeros.numCapitulos;
}

BibliaKJV.getNumVerCapNumeros = function(id){
	var cap = BibliaKJV.numeros[id];	
	
	if (cap == null){
		return null;
	}
	
	return cap.numVersiculos;
}

BibliaKJV.getVersiculoNumeros = function(id, name){
	var cap = BibliaKJV.numeros[id];	

	if (cap == null){
		return null;
	}

	var versiculos = cap.versiculos;
	var i = 0;
	var n = versiculos.length;
	for (i=0; i<n; i++){
		if (versiculos[i].name == name){ 
			return versiculos[i];
		}
	}
	
	return null;

}
// Deuteronomio
BibliaKJV.getNomLibDeuteronomio = function(){
	return BibliaKJV.deuteronomio.libro;
}

BibliaKJV.getNumCapDeuteronomio = function(){
	return BibliaKJV.deuteronomio.numCapitulos;
}

BibliaKJV.getNumVerCapDeuteronomio = function(id){
	var cap = BibliaKJV.deuteronomio[id];	
	
	if (cap == null){
		return null;
	}
	
	return cap.numVersiculos;
}

BibliaKJV.getVersiculoDeuteronomio = function(id, name){
	var cap = BibliaKJV.deuteronomio[id];	

	if (cap == null){
		return null;
	}

	var versiculos = cap.versiculos;
	var i = 0;
	var n = versiculos.length;
	for (i=0; i<n; i++){
		if (versiculos[i].name == name){ 
			return versiculos[i];
		}
	}
	
	return null;

}
// Josue
BibliaKJV.getNomLibJosue = function(){
	return BibliaKJV.josue.libro;
}

BibliaKJV.getNumCapJosue = function(){
	return BibliaKJV.josue.numCapitulos;
}

BibliaKJV.getNumVerCapJosue = function(id){
	var cap = BibliaKJV.josue[id];	
	
	if (cap == null){
		return null;
	}
	
	return cap.numVersiculos;
}

BibliaKJV.getVersiculoJosue = function(id, name){
	var cap = BibliaKJV.josue[id];	

	if (cap == null){
		return null;
	}

	var versiculos = cap.versiculos;
	var i = 0;
	var n = versiculos.length;
	for (i=0; i<n; i++){
		if (versiculos[i].name == name){ 
			return versiculos[i];
		}
	}
	
	return null;

}
// Jueces
BibliaKJV.getNomLibJueces = function(){
	return BibliaKJV.jueces.libro;
}

BibliaKJV.getNumCapJueces = function(){
	return BibliaKJV.jueces.numCapitulos;
}

BibliaKJV.getNumVerCapJueces = function(id){
	var cap = BibliaKJV.jueces[id];	
	
	if (cap == null){
		return null;
	}
	
	return cap.numVersiculos;
}

BibliaKJV.getVersiculoJueces = function(id, name){
	var cap = BibliaKJV.jueces[id];	

	if (cap == null){
		return null;
	}

	var versiculos = cap.versiculos;
	var i = 0;
	var n = versiculos.length;
	for (i=0; i<n; i++){
		if (versiculos[i].name == name){ 
			return versiculos[i];
		}
	}
	
	return null;

}
// Rut
BibliaKJV.getNomLibRut = function(){
	return BibliaKJV.rut.libro;
}

BibliaKJV.getNumCapRut = function(){
	return BibliaKJV.rut.numCapitulos;
}

BibliaKJV.getNumVerCapRut = function(id){
	var cap = BibliaKJV.rut[id];	
	
	if (cap == null){
		return null;
	}
	
	return cap.numVersiculos;
}

BibliaKJV.getVersiculoRut = function(id, name){
	var cap = BibliaKJV.rut[id];	

	if (cap == null){
		return null;
	}

	var versiculos = cap.versiculos;
	var i = 0;
	var n = versiculos.length;
	for (i=0; i<n; i++){
		if (versiculos[i].name == name){ 
			return versiculos[i];
		}
	}
	
	return null;

}
// 1 Samuel 
BibliaKJV.getNomLibSamuel1 = function(){
	return BibliaKJV.samuel1.libro;
}

BibliaKJV.getNumCapSamuel1 = function(){
	return BibliaKJV.samuel1.numCapitulos;
}

BibliaKJV.getNumVerCapSamuel1 = function(id){
	var cap = BibliaKJV.samuel1[id];	
	
	if (cap == null){
		return null;
	}
	
	return cap.numVersiculos;
}

BibliaKJV.getVersiculoSamuel1 = function(id, name){
	var cap = BibliaKJV.samuel1[id];	

	if (cap == null){
		return null;
	}

	var versiculos = cap.versiculos;
	var i = 0;
	var n = versiculos.length;
	for (i=0; i<n; i++){
		if (versiculos[i].name == name){ 
			return versiculos[i];
		}
	}
	
	return null;

}
// 2 Samuel 
BibliaKJV.getNomLibSamuel2 = function(){
	return BibliaKJV.samuel2.libro;
}

BibliaKJV.getNumCapSamuel2 = function(){
	return BibliaKJV.samuel2.numCapitulos;
}

BibliaKJV.getNumVerCapSamuel2 = function(id){
	var cap = BibliaKJV.samuel2[id];	
	
	if (cap == null){
		return null;
	}
	
	return cap.numVersiculos;
}

BibliaKJV.getVersiculoSamuel2 = function(id, name){
	var cap = BibliaKJV.samuel2[id];	

	if (cap == null){
		return null;
	}

	var versiculos = cap.versiculos;
	var i = 0;
	var n = versiculos.length;
	for (i=0; i<n; i++){
		if (versiculos[i].name == name){ 
			return versiculos[i];
		}
	}
	
	return null;

}
// 1 Reyes 
BibliaKJV.getNomLibReyes1 = function(){
	return BibliaKJV.reyes1.libro;
}

BibliaKJV.getNumCapReyes1 = function(){
	return BibliaKJV.reyes1.numCapitulos;
}

BibliaKJV.getNumVerCapReyes1 = function(id){
	var cap = BibliaKJV.reyes1[id];	
	
	if (cap == null){
		return null;
	}
	
	return cap.numVersiculos;
}

BibliaKJV.getVersiculoReyes1 = function(id, name){
	var cap = BibliaKJV.reyes1[id];	

	if (cap == null){
		return null;
	}

	var versiculos = cap.versiculos;
	var i = 0;
	var n = versiculos.length;
	for (i=0; i<n; i++){
		if (versiculos[i].name == name){ 
			return versiculos[i];
		}
	}
	
	return null;

}
// 2 Reyes 
BibliaKJV.getNomLibReyes2 = function(){
	return BibliaKJV.reyes2.libro;
}

BibliaKJV.getNumCapReyes2 = function(){
	return BibliaKJV.reyes2.numCapitulos;
}

BibliaKJV.getNumVerCapReyes2 = function(id){
	var cap = BibliaKJV.reyes2[id];	
	
	if (cap == null){
		return null;
	}
	
	return cap.numVersiculos;
}

BibliaKJV.getVersiculoReyes2 = function(id, name){
	var cap = BibliaKJV.reyes2[id];	

	if (cap == null){
		return null;
	}

	var versiculos = cap.versiculos;
	var i = 0;
	var n = versiculos.length;
	for (i=0; i<n; i++){
		if (versiculos[i].name == name){ 
			return versiculos[i];
		}
	}
	
	return null;

}
// 1 Cronicas 
BibliaKJV.getNomLibCronicas1 = function(){
	return BibliaKJV.cronicas1.libro;
}

BibliaKJV.getNumCapCronicas1 = function(){
	return BibliaKJV.cronicas1.numCapitulos;
}

BibliaKJV.getNumVerCapCronicas1 = function(id){
	var cap = BibliaKJV.cronicas1[id];	
	
	if (cap == null){
		return null;
	}
	
	return cap.numVersiculos;
}

BibliaKJV.getVersiculoCronicas1 = function(id, name){
	var cap = BibliaKJV.cronicas1[id];	

	if (cap == null){
		return null;
	}

	var versiculos = cap.versiculos;
	var i = 0;
	var n = versiculos.length;
	for (i=0; i<n; i++){
		if (versiculos[i].name == name){ 
			return versiculos[i];
		}
	}
	
	return null;

}
// 2 Cronicas 
BibliaKJV.getNomLibCronicas2 = function(){
	return BibliaKJV.cronicas2.libro;
}

BibliaKJV.getNumCapCronicas2 = function(){
	return BibliaKJV.cronicas2.numCapitulos;
}

BibliaKJV.getNumVerCapCronicas2 = function(id){
	var cap = BibliaKJV.cronicas2[id];	
	
	if (cap == null){
		return null;
	}
	
	return cap.numVersiculos;
}

BibliaKJV.getVersiculoCronicas2 = function(id, name){
	var cap = BibliaKJV.cronicas2[id];	

	if (cap == null){
		return null;
	}

	var versiculos = cap.versiculos;
	var i = 0;
	var n = versiculos.length;
	for (i=0; i<n; i++){
		if (versiculos[i].name == name){ 
			return versiculos[i];
		}
	}
	
	return null;

}
// Esdras
BibliaKJV.getNomLibEsdras = function(){
	return BibliaKJV.esdras.libro;
}

BibliaKJV.getNumCapEsdras = function(){
	return BibliaKJV.esdras.numCapitulos;
}

BibliaKJV.getNumVerCapEsdras = function(id){
	var cap = BibliaKJV.esdras[id];	
	
	if (cap == null){
		return null;
	}
	
	return cap.numVersiculos;
}

BibliaKJV.getVersiculoEsdras = function(id, name){
	var cap = BibliaKJV.esdras[id];	

	if (cap == null){
		return null;
	}

	var versiculos = cap.versiculos;
	var i = 0;
	var n = versiculos.length;
	for (i=0; i<n; i++){
		if (versiculos[i].name == name){ 
			return versiculos[i];
		}
	}
	
	return null;

}
// Nehemias
BibliaKJV.getNomLibNehemias = function(){
	return BibliaKJV.nehemias.libro;
}

BibliaKJV.getNumCapNehemias = function(){
	return BibliaKJV.nehemias.numCapitulos;
}

BibliaKJV.getNumVerCapNehemias = function(id){
	var cap = BibliaKJV.nehemias[id];	
	
	if (cap == null){
		return null;
	}
	
	return cap.numVersiculos;
}

BibliaKJV.getVersiculoNehemias = function(id, name){
	var cap = BibliaKJV.nehemias[id];	

	if (cap == null){
		return null;
	}

	var versiculos = cap.versiculos;
	var i = 0;
	var n = versiculos.length;
	for (i=0; i<n; i++){
		if (versiculos[i].name == name){ 
			return versiculos[i];
		}
	}
	
	return null;

}
// Ester
BibliaKJV.getNomLibEster = function(){
	return BibliaKJV.ester.libro;
}

BibliaKJV.getNumCapEster = function(){
	return BibliaKJV.ester.numCapitulos;
}

BibliaKJV.getNumVerCapEster = function(id){
	var cap = BibliaKJV.ester[id];	
	
	if (cap == null){
		return null;
	}
	
	return cap.numVersiculos;
}

BibliaKJV.getVersiculoEster = function(id, name){
	var cap = BibliaKJV.ester[id];	

	if (cap == null){
		return null;
	}

	var versiculos = cap.versiculos;
	var i = 0;
	var n = versiculos.length;
	for (i=0; i<n; i++){
		if (versiculos[i].name == name){ 
			return versiculos[i];
		}
	}
	
	return null;

}
// Job
BibliaKJV.getNomLibJob = function(){
	return BibliaKJV.job.libro;
}

BibliaKJV.getNumCapJob = function(){
	return BibliaKJV.job.numCapitulos;
}

BibliaKJV.getNumVerCapJob = function(id){
	var cap = BibliaKJV.job[id];	
	
	if (cap == null){
		return null;
	}
	
	return cap.numVersiculos;
}

BibliaKJV.getVersiculoJob = function(id, name){
	var cap = BibliaKJV.job[id];	

	if (cap == null){
		return null;
	}

	var versiculos = cap.versiculos;
	var i = 0;
	var n = versiculos.length;
	for (i=0; i<n; i++){
		if (versiculos[i].name == name){ 
			return versiculos[i];
		}
	}
	
	return null;

}
// Salmos
BibliaKJV.getNomLibSalmos = function(){
	return BibliaKJV.salmos.libro;
}

BibliaKJV.getNumCapSalmos = function(){
	return BibliaKJV.salmos.numCapitulos;
}

BibliaKJV.getNumVerCapSalmos = function(id){
	var cap = BibliaKJV.salmos[id];	
	
	if (cap == null){
		return null;
	}
	
	return cap.numVersiculos;
}

BibliaKJV.getVersiculoSalmos = function(id, name){
	var cap = BibliaKJV.salmos[id];	

	if (cap == null){
		return null;
	}

	var versiculos = cap.versiculos;
	var i = 0;
	var n = versiculos.length;
	for (i=0; i<n; i++){
		if (versiculos[i].name == name){ 
			return versiculos[i];
		}
	}
	
	return null;

}
// Proverbios
BibliaKJV.getNomLibProverbios = function(){
	return BibliaKJV.proverbios.libro;
}

BibliaKJV.getNumCapProverbios = function(){
	return BibliaKJV.proverbios.numCapitulos;
}

BibliaKJV.getNumVerCapProverbios = function(id){
	var cap = BibliaKJV.proverbios[id];	
	
	if (cap == null){
		return null;
	}
	
	return cap.numVersiculos;
}

BibliaKJV.getVersiculoProverbios = function(id, name){
	var cap = BibliaKJV.proverbios[id];	

	if (cap == null){
		return null;
	}

	var versiculos = cap.versiculos;
	var i = 0;
	var n = versiculos.length;
	for (i=0; i<n; i++){
		if (versiculos[i].name == name){ 
			return versiculos[i];
		}
	}
	
	return null;

}
// Eclesiastes
BibliaKJV.getNomLibEclesiastes = function(){
	return BibliaKJV.eclesiastes.libro;
}

BibliaKJV.getNumCapEclesiastes = function(){
	return BibliaKJV.eclesiastes.numCapitulos;
}

BibliaKJV.getNumVerCapEclesiastes = function(id){
	var cap = BibliaKJV.eclesiastes[id];	
	
	if (cap == null){
		return null;
	}
	
	return cap.numVersiculos;
}

BibliaKJV.getVersiculoEclesiastes = function(id, name){
	var cap = BibliaKJV.eclesiastes[id];	

	if (cap == null){
		return null;
	}

	var versiculos = cap.versiculos;
	var i = 0;
	var n = versiculos.length;
	for (i=0; i<n; i++){
		if (versiculos[i].name == name){ 
			return versiculos[i];
		}
	}
	
	return null;

}
// Cantares
BibliaKJV.getNomLibCantares = function(){
	return BibliaKJV.cantares.libro;
}

BibliaKJV.getNumCapCantares = function(){
	return BibliaKJV.cantares.numCapitulos;
}

BibliaKJV.getNumVerCapCantares = function(id){
	var cap = BibliaKJV.cantares[id];	
	
	if (cap == null){
		return null;
	}
	
	return cap.numVersiculos;
}

BibliaKJV.getVersiculoCantares = function(id, name){
	var cap = BibliaKJV.cantares[id];	

	if (cap == null){
		return null;
	}

	var versiculos = cap.versiculos;
	var i = 0;
	var n = versiculos.length;
	for (i=0; i<n; i++){
		if (versiculos[i].name == name){ 
			return versiculos[i];
		}
	}
	
	return null;

}
// Isaias
BibliaKJV.getNomLibIsaias = function(){
	return BibliaKJV.isaias.libro;
}

BibliaKJV.getNumCapIsaias = function(){
	return BibliaKJV.isaias.numCapitulos;
}

BibliaKJV.getNumVerCapIsaias = function(id){
	var cap = BibliaKJV.isaias[id];	
	
	if (cap == null){
		return null;
	}
	
	return cap.numVersiculos;
}

BibliaKJV.getVersiculoIsaias = function(id, name){
	var cap = BibliaKJV.isaias[id];	

	if (cap == null){
		return null;
	}

	var versiculos = cap.versiculos;
	var i = 0;
	var n = versiculos.length;
	for (i=0; i<n; i++){
		if (versiculos[i].name == name){ 
			return versiculos[i];
		}
	}
	
	return null;

}
// Jeremias
BibliaKJV.getNomLibJeremias = function(){
	return BibliaKJV.jeremias.libro;
}

BibliaKJV.getNumCapJeremias = function(){
	return BibliaKJV.jeremias.numCapitulos;
}

BibliaKJV.getNumVerCapJeremias = function(id){
	var cap = BibliaKJV.jeremias[id];	
	
	if (cap == null){
		return null;
	}
	
	return cap.numVersiculos;
}

BibliaKJV.getVersiculoJeremias = function(id, name){
	var cap = BibliaKJV.jeremias[id];	

	if (cap == null){
		return null;
	}

	var versiculos = cap.versiculos;
	var i = 0;
	var n = versiculos.length;
	for (i=0; i<n; i++){
		if (versiculos[i].name == name){ 
			return versiculos[i];
		}
	}
	
	return null;

}
// Lamentaciones
BibliaKJV.getNomLibLamentaciones = function(){
	return BibliaKJV.lamentaciones.libro;
}

BibliaKJV.getNumCapLamentaciones = function(){
	return BibliaKJV.lamentaciones.numCapitulos;
}

BibliaKJV.getNumVerCapLamentaciones = function(id){
	var cap = BibliaKJV.lamentaciones[id];	
	
	if (cap == null){
		return null;
	}
	
	return cap.numVersiculos;
}

BibliaKJV.getVersiculoLamentaciones = function(id, name){
	var cap = BibliaKJV.lamentaciones[id];	

	if (cap == null){
		return null;
	}

	var versiculos = cap.versiculos;
	var i = 0;
	var n = versiculos.length;
	for (i=0; i<n; i++){
		if (versiculos[i].name == name){ 
			return versiculos[i];
		}
	}
	
	return null;

}
// Ezequiel
BibliaKJV.getNomLibEzequiel = function(){
	return BibliaKJV.ezequiel.libro;
}

BibliaKJV.getNumCapEzequiel = function(){
	return BibliaKJV.ezequiel.numCapitulos;
}

BibliaKJV.getNumVerCapEzequiel = function(id){
	var cap = BibliaKJV.ezequiel[id];	
	
	if (cap == null){
		return null;
	}
	
	return cap.numVersiculos;
}

BibliaKJV.getVersiculoEzequiel = function(id, name){
	var cap = BibliaKJV.ezequiel[id];	

	if (cap == null){
		return null;
	}

	var versiculos = cap.versiculos;
	var i = 0;
	var n = versiculos.length;
	for (i=0; i<n; i++){
		if (versiculos[i].name == name){ 
			return versiculos[i];
		}
	}
	
	return null;

}
// Daniel
BibliaKJV.getNomLibDaniel = function(){
	return BibliaKJV.daniel.libro;
}

BibliaKJV.getNumCapDaniel = function(){
	return BibliaKJV.daniel.numCapitulos;
}

BibliaKJV.getNumVerCapDaniel = function(id){
	var cap = BibliaKJV.daniel[id];	
	
	if (cap == null){
		return null;
	}
	
	return cap.numVersiculos;
}

BibliaKJV.getVersiculoDaniel = function(id, name){
	var cap = BibliaKJV.daniel[id];	

	if (cap == null){
		return null;
	}

	var versiculos = cap.versiculos;
	var i = 0;
	var n = versiculos.length;
	for (i=0; i<n; i++){
		if (versiculos[i].name == name){ 
			return versiculos[i];
		}
	}
	
	return null;

}
// Oseas
BibliaKJV.getNomLibOseas = function(){
	return BibliaKJV.oseas.libro;
}

BibliaKJV.getNumCapOseas = function(){
	return BibliaKJV.oseas.numCapitulos;
}

BibliaKJV.getNumVerCapOseas = function(id){
	var cap = BibliaKJV.oseas[id];	
	
	if (cap == null){
		return null;
	}
	
	return cap.numVersiculos;
}

BibliaKJV.getVersiculoOseas = function(id, name){
	var cap = BibliaKJV.oseas[id];	

	if (cap == null){
		return null;
	}

	var versiculos = cap.versiculos;
	var i = 0;
	var n = versiculos.length;
	for (i=0; i<n; i++){
		if (versiculos[i].name == name){ 
			return versiculos[i];
		}
	}
	
	return null;

}
// Joel
BibliaKJV.getNomLibJoel = function(){
	return BibliaKJV.joel.libro;
}

BibliaKJV.getNumCapJoel = function(){
	return BibliaKJV.joel.numCapitulos;
}

BibliaKJV.getNumVerCapJoel = function(id){
	var cap = BibliaKJV.joel[id];	
	
	if (cap == null){
		return null;
	}
	
	return cap.numVersiculos;
}

BibliaKJV.getVersiculoJoel = function(id, name){
	var cap = BibliaKJV.joel[id];	

	if (cap == null){
		return null;
	}

	var versiculos = cap.versiculos;
	var i = 0;
	var n = versiculos.length;
	for (i=0; i<n; i++){
		if (versiculos[i].name == name){ 
			return versiculos[i];
		}
	}
	
	return null;

}
// Amos
BibliaKJV.getNomLibAmos = function(){
	return BibliaKJV.amos.libro;
}

BibliaKJV.getNumCapAmos = function(){
	return BibliaKJV.amos.numCapitulos;
}

BibliaKJV.getNumVerCapAmos = function(id){
	var cap = BibliaKJV.amos[id];	
	
	if (cap == null){
		return null;
	}
	
	return cap.numVersiculos;
}

BibliaKJV.getVersiculoAmos = function(id, name){
	var cap = BibliaKJV.amos[id];	

	if (cap == null){
		return null;
	}

	var versiculos = cap.versiculos;
	var i = 0;
	var n = versiculos.length;
	for (i=0; i<n; i++){
		if (versiculos[i].name == name){ 
			return versiculos[i];
		}
	}
	
	return null;

}
// Abdias
BibliaKJV.getNomLibAbdias = function(){
	return BibliaKJV.abdias.libro;
}

BibliaKJV.getNumCapAbdias = function(){
	return BibliaKJV.abdias.numCapitulos;
}

BibliaKJV.getNumVerCapAbdias = function(id){
	var cap = BibliaKJV.abdias[id];	
	
	if (cap == null){
		return null;
	}
	
	return cap.numVersiculos;
}

BibliaKJV.getVersiculoAbdias = function(id, name){
	var cap = BibliaKJV.abdias[id];	

	if (cap == null){
		return null;
	}

	var versiculos = cap.versiculos;
	var i = 0;
	var n = versiculos.length;
	for (i=0; i<n; i++){
		if (versiculos[i].name == name){ 
			return versiculos[i];
		}
	}
	
	return null;

}
// Jonas
BibliaKJV.getNomLibJonas = function(){
	return BibliaKJV.jonas.libro;
}

BibliaKJV.getNumCapJonas = function(){
	return BibliaKJV.jonas.numCapitulos;
}

BibliaKJV.getNumVerCapJonas = function(id){
	var cap = BibliaKJV.jonas[id];	
	
	if (cap == null){
		return null;
	}
	
	return cap.numVersiculos;
}

BibliaKJV.getVersiculoJonas = function(id, name){
	var cap = BibliaKJV.jonas[id];	

	if (cap == null){
		return null;
	}

	var versiculos = cap.versiculos;
	var i = 0;
	var n = versiculos.length;
	for (i=0; i<n; i++){
		if (versiculos[i].name == name){ 
			return versiculos[i];
		}
	}
	
	return null;

}
// Miqueas
BibliaKJV.getNomLibMiqueas = function(){
	return BibliaKJV.miqueas.libro;
}

BibliaKJV.getNumCapMiqueas = function(){
	return BibliaKJV.miqueas.numCapitulos;
}

BibliaKJV.getNumVerCapMiqueas = function(id){
	var cap = BibliaKJV.miqueas[id];	
	
	if (cap == null){
		return null;
	}
	
	return cap.numVersiculos;
}

BibliaKJV.getVersiculoMiqueas = function(id, name){
	var cap = BibliaKJV.miqueas[id];	

	if (cap == null){
		return null;
	}

	var versiculos = cap.versiculos;
	var i = 0;
	var n = versiculos.length;
	for (i=0; i<n; i++){
		if (versiculos[i].name == name){ 
			return versiculos[i];
		}
	}
	
	return null;

}
// Nahum
BibliaKJV.getNomLibNahum = function(){
	return BibliaKJV.nahum.libro;
}

BibliaKJV.getNumCapNahum = function(){
	return BibliaKJV.nahum.numCapitulos;
}

BibliaKJV.getNumVerCapNahum = function(id){
	var cap = BibliaKJV.nahum[id];	
	
	if (cap == null){
		return null;
	}
	
	return cap.numVersiculos;
}

BibliaKJV.getVersiculoNahum = function(id, name){
	var cap = BibliaKJV.nahum[id];	

	if (cap == null){
		return null;
	}

	var versiculos = cap.versiculos;
	var i = 0;
	var n = versiculos.length;
	for (i=0; i<n; i++){
		if (versiculos[i].name == name){ 
			return versiculos[i];
		}
	}
	
	return null;

}
// Habacuc
BibliaKJV.getNomLibHabacuc = function(){
	return BibliaKJV.habacuc.libro;
}

BibliaKJV.getNumCapHabacuc = function(){
	return BibliaKJV.habacuc.numCapitulos;
}

BibliaKJV.getNumVerCapHabacuc = function(id){
	var cap = BibliaKJV.habacuc[id];	
	
	if (cap == null){
		return null;
	}
	
	return cap.numVersiculos;
}

BibliaKJV.getVersiculoHabacuc = function(id, name){
	var cap = BibliaKJV.habacuc[id];	

	if (cap == null){
		return null;
	}

	var versiculos = cap.versiculos;
	var i = 0;
	var n = versiculos.length;
	for (i=0; i<n; i++){
		if (versiculos[i].name == name){ 
			return versiculos[i];
		}
	}
	
	return null;

}
// Sofonias
BibliaKJV.getNomLibSofonias = function(){
	return BibliaKJV.sofonias.libro;
}

BibliaKJV.getNumCapSofonias = function(){
	return BibliaKJV.sofonias.numCapitulos;
}

BibliaKJV.getNumVerCapSofonias = function(id){
	var cap = BibliaKJV.sofonias[id];	
	
	if (cap == null){
		return null;
	}
	
	return cap.numVersiculos;
}

BibliaKJV.getVersiculoSofonias = function(id, name){
	var cap = BibliaKJV.sofonias[id];	

	if (cap == null){
		return null;
	}

	var versiculos = cap.versiculos;
	var i = 0;
	var n = versiculos.length;
	for (i=0; i<n; i++){
		if (versiculos[i].name == name){ 
			return versiculos[i];
		}
	}
	
	return null;

}
// Hageo
BibliaKJV.getNomLibHageo = function(){
	return BibliaKJV.hageo.libro;
}

BibliaKJV.getNumCapHageo = function(){
	return BibliaKJV.hageo.numCapitulos;
}

BibliaKJV.getNumVerCapHageo = function(id){
	var cap = BibliaKJV.hageo[id];	
	
	if (cap == null){
		return null;
	}
	
	return cap.numVersiculos;
}

BibliaKJV.getVersiculoHageo = function(id, name){
	var cap = BibliaKJV.hageo[id];	

	if (cap == null){
		return null;
	}

	var versiculos = cap.versiculos;
	var i = 0;
	var n = versiculos.length;
	for (i=0; i<n; i++){
		if (versiculos[i].name == name){ 
			return versiculos[i];
		}
	}
	
	return null;

}
// Zacarias
BibliaKJV.getNomLibZacarias = function(){
	return BibliaKJV.zacarias.libro;
}

BibliaKJV.getNumCapZacarias = function(){
	return BibliaKJV.zacarias.numCapitulos;
}

BibliaKJV.getNumVerCapZacarias = function(id){
	var cap = BibliaKJV.zacarias[id];	
	
	if (cap == null){
		return null;
	}
	
	return cap.numVersiculos;
}

BibliaKJV.getVersiculoZacarias = function(id, name){
	var cap = BibliaKJV.zacarias[id];	

	if (cap == null){
		return null;
	}

	var versiculos = cap.versiculos;
	var i = 0;
	var n = versiculos.length;
	for (i=0; i<n; i++){
		if (versiculos[i].name == name){ 
			return versiculos[i];
		}
	}
	
	return null;

}
// Malaquias
BibliaKJV.getNomLibMalaquias = function(){
	return BibliaKJV.malaquias.libro;
}

BibliaKJV.getNumCapMalaquias = function(){
	return BibliaKJV.malaquias.numCapitulos;
}

BibliaKJV.getNumVerCapMalaquias = function(id){
	var cap = BibliaKJV.malaquias[id];	
	
	if (cap == null){
		return null;
	}
	
	return cap.numVersiculos;
}

BibliaKJV.getVersiculoMalaquias = function(id, name){
	var cap = BibliaKJV.malaquias[id];	

	if (cap == null){
		return null;
	}

	var versiculos = cap.versiculos;
	var i = 0;
	var n = versiculos.length;
	for (i=0; i<n; i++){
		if (versiculos[i].name == name){ 
			return versiculos[i];
		}
	}
	
	return null;

}
// Mateo
BibliaKJV.getNomLibMateo = function(){
	return BibliaKJV.mateo.libro;
}

BibliaKJV.getNumCapMateo = function(){
	return BibliaKJV.mateo.numCapitulos;
}

BibliaKJV.getNumVerCapMateo = function(id){
	var cap = BibliaKJV.mateo[id];	
	
	if (cap == null){
		return null;
	}
	
	return cap.numVersiculos;
}

BibliaKJV.getVersiculoMateo = function(id, name){
	var cap = BibliaKJV.mateo[id];	

	if (cap == null){
		return null;
	}

	var versiculos = cap.versiculos;
	var i = 0;
	var n = versiculos.length;
	for (i=0; i<n; i++){
		if (versiculos[i].name == name){ 
			return versiculos[i];
		}
	}
	
	return null;

}
// Marcos
BibliaKJV.getNomLibMarcos = function(){
	return BibliaKJV.marcos.libro;
}

BibliaKJV.getNumCapMarcos = function(){
	return BibliaKJV.marcos.numCapitulos;
}

BibliaKJV.getNumVerCapMarcos = function(id){
	var cap = BibliaKJV.marcos[id];	
	
	if (cap == null){
		return null;
	}
	
	return cap.numVersiculos;
}

BibliaKJV.getVersiculoMarcos = function(id, name){
	var cap = BibliaKJV.marcos[id];	

	if (cap == null){
		return null;
	}

	var versiculos = cap.versiculos;
	var i = 0;
	var n = versiculos.length;
	for (i=0; i<n; i++){
		if (versiculos[i].name == name){ 
			return versiculos[i];
		}
	}
	
	return null;

}
// Lucas
BibliaKJV.getNomLibLucas = function(){
	return BibliaKJV.lucas.libro;
}

BibliaKJV.getNumCapLucas = function(){
	return BibliaKJV.lucas.numCapitulos;
}

BibliaKJV.getNumVerCapLucas = function(id){
	var cap = BibliaKJV.lucas[id];	
	
	if (cap == null){
		return null;
	}
	
	return cap.numVersiculos;
}

BibliaKJV.getVersiculoLucas = function(id, name){
	var cap = BibliaKJV.lucas[id];	

	if (cap == null){
		return null;
	}

	var versiculos = cap.versiculos;
	var i = 0;
	var n = versiculos.length;
	for (i=0; i<n; i++){
		if (versiculos[i].name == name){ 
			return versiculos[i];
		}
	}
	
	return null;

}
// Juan
BibliaKJV.getNomLibJuan = function(){
	return BibliaKJV.juan.libro;
}

BibliaKJV.getNumCapJuan = function(){
	return BibliaKJV.juan.numCapitulos;
}

BibliaKJV.getNumVerCapJuan = function(id){
	var cap = BibliaKJV.juan[id];	
	
	if (cap == null){
		return null;
	}
	
	return cap.numVersiculos;
}

BibliaKJV.getVersiculoJuan = function(id, name){
	var cap = BibliaKJV.juan[id];	

	if (cap == null){
		return null;
	}

	var versiculos = cap.versiculos;
	var i = 0;
	var n = versiculos.length;
	for (i=0; i<n; i++){
		if (versiculos[i].name == name){ 
			return versiculos[i];
		}
	}
	
	return null;

}
// Hechos
BibliaKJV.getNomLibHechos = function(){
	return BibliaKJV.hechos.libro;
}

BibliaKJV.getNumCapHechos = function(){
	return BibliaKJV.hechos.numCapitulos;
}

BibliaKJV.getNumVerCapHechos = function(id){
	var cap = BibliaKJV.hechos[id];	
	
	if (cap == null){
		return null;
	}
	
	return cap.numVersiculos;
}

BibliaKJV.getVersiculoHechos = function(id, name){
	var cap = BibliaKJV.hechos[id];	

	if (cap == null){
		return null;
	}

	var versiculos = cap.versiculos;
	var i = 0;
	var n = versiculos.length;
	for (i=0; i<n; i++){
		if (versiculos[i].name == name){ 
			return versiculos[i];
		}
	}
	
	return null;

}
// Romanos
BibliaKJV.getNomLibRomanos = function(){
	return BibliaKJV.romanos.libro;
}

BibliaKJV.getNumCapRomanos = function(){
	return BibliaKJV.romanos.numCapitulos;
}

BibliaKJV.getNumVerCapRomanos = function(id){
	var cap = BibliaKJV.romanos[id];	
	
	if (cap == null){
		return null;
	}
	
	return cap.numVersiculos;
}

BibliaKJV.getVersiculoRomanos = function(id, name){
	var cap = BibliaKJV.romanos[id];	

	if (cap == null){
		return null;
	}

	var versiculos = cap.versiculos;
	var i = 0;
	var n = versiculos.length;
	for (i=0; i<n; i++){
		if (versiculos[i].name == name){ 
			return versiculos[i];
		}
	}
	
	return null;

}
// 1 Corintios
BibliaKJV.getNomLibCorintios1 = function(){
	return BibliaKJV.corintios1.libro;
}

BibliaKJV.getNumCapCorintios1 = function(){
	return BibliaKJV.corintios1.numCapitulos;
}

BibliaKJV.getNumVerCapCorintios1 = function(id){
	var cap = BibliaKJV.corintios1[id];	
	
	if (cap == null){
		return null;
	}
	
	return cap.numVersiculos;
}

BibliaKJV.getVersiculoCorintios1 = function(id, name){
	var cap = BibliaKJV.corintios1[id];	

	if (cap == null){
		return null;
	}

	var versiculos = cap.versiculos;
	var i = 0;
	var n = versiculos.length;
	for (i=0; i<n; i++){
		if (versiculos[i].name == name){ 
			return versiculos[i];
		}
	}
	
	return null;

}
// 2 Corintios
BibliaKJV.getNomLibCorintios2 = function(){
	return BibliaKJV.corintios2.libro;
}

BibliaKJV.getNumCapCorintios2 = function(){
	return BibliaKJV.corintios2.numCapitulos;
}

BibliaKJV.getNumVerCapCorintios2 = function(id){
	var cap = BibliaKJV.corintios2[id];	
	
	if (cap == null){
		return null;
	}
	
	return cap.numVersiculos;
}

BibliaKJV.getVersiculoCorintios2 = function(id, name){
	var cap = BibliaKJV.corintios2[id];	

	if (cap == null){
		return null;
	}

	var versiculos = cap.versiculos;
	var i = 0;
	var n = versiculos.length;
	for (i=0; i<n; i++){
		if (versiculos[i].name == name){ 
			return versiculos[i];
		}
	}
	
	return null;

}
// Galatas
BibliaKJV.getNomLibGalatas = function(){
	return BibliaKJV.galatas.libro;
}

BibliaKJV.getNumCapGalatas = function(){
	return BibliaKJV.galatas.numCapitulos;
}

BibliaKJV.getNumVerCapGalatas = function(id){
	var cap = BibliaKJV.galatas[id];	
	
	if (cap == null){
		return null;
	}
	
	return cap.numVersiculos;
}

BibliaKJV.getVersiculoGalatas = function(id, name){
	var cap = BibliaKJV.galatas[id];	

	if (cap == null){
		return null;
	}

	var versiculos = cap.versiculos;
	var i = 0;
	var n = versiculos.length;
	for (i=0; i<n; i++){
		if (versiculos[i].name == name){ 
			return versiculos[i];
		}
	}
	
	return null;

}
// Efesios
BibliaKJV.getNomLibEfesios = function(){
	return BibliaKJV.efesios.libro;
}

BibliaKJV.getNumCapEfesios = function(){
	return BibliaKJV.efesios.numCapitulos;
}

BibliaKJV.getNumVerCapEfesios = function(id){
	var cap = BibliaKJV.efesios[id];	
	
	if (cap == null){
		return null;
	}
	
	return cap.numVersiculos;
}

BibliaKJV.getVersiculoEfesios = function(id, name){
	var cap = BibliaKJV.efesios[id];	

	if (cap == null){
		return null;
	}

	var versiculos = cap.versiculos;
	var i = 0;
	var n = versiculos.length;
	for (i=0; i<n; i++){
		if (versiculos[i].name == name){ 
			return versiculos[i];
		}
	}
	
	return null;

}
// Filipenses
BibliaKJV.getNomLibFilipenses = function(){
	return BibliaKJV.filipenses.libro;
}

BibliaKJV.getNumCapFilipenses = function(){
	return BibliaKJV.filipenses.numCapitulos;
}

BibliaKJV.getNumVerCapFilipenses = function(id){
	var cap = BibliaKJV.filipenses[id];	
	
	if (cap == null){
		return null;
	}
	
	return cap.numVersiculos;
}

BibliaKJV.getVersiculoFilipenses = function(id, name){
	var cap = BibliaKJV.filipenses[id];	

	if (cap == null){
		return null;
	}

	var versiculos = cap.versiculos;
	var i = 0;
	var n = versiculos.length;
	for (i=0; i<n; i++){
		if (versiculos[i].name == name){ 
			return versiculos[i];
		}
	}
	
	return null;

}
// Colosenses
BibliaKJV.getNomLibColosenses = function(){
	return BibliaKJV.colosenses.libro;
}

BibliaKJV.getNumCapColosenses = function(){
	return BibliaKJV.colosenses.numCapitulos;
}

BibliaKJV.getNumVerCapColosenses = function(id){
	var cap = BibliaKJV.colosenses[id];	
	
	if (cap == null){
		return null;
	}
	
	return cap.numVersiculos;
}

BibliaKJV.getVersiculoColosenses = function(id, name){
	var cap = BibliaKJV.colosenses[id];	

	if (cap == null){
		return null;
	}

	var versiculos = cap.versiculos;
	var i = 0;
	var n = versiculos.length;
	for (i=0; i<n; i++){
		if (versiculos[i].name == name){ 
			return versiculos[i];
		}
	}
	
	return null;

}
// 1 Tesalonicenses
BibliaKJV.getNomLibTesalonicenses1 = function(){
	return BibliaKJV.tesalonicenses1.libro;
}

BibliaKJV.getNumCapTesalonicenses1 = function(){
	return BibliaKJV.tesalonicenses1.numCapitulos;
}

BibliaKJV.getNumVerCapTesalonicenses1 = function(id){
	var cap = BibliaKJV.tesalonicenses1[id];	
	
	if (cap == null){
		return null;
	}
	
	return cap.numVersiculos;
}

BibliaKJV.getVersiculoTesalonicenses1 = function(id, name){
	var cap = BibliaKJV.tesalonicenses1[id];	

	if (cap == null){
		return null;
	}

	var versiculos = cap.versiculos;
	var i = 0;
	var n = versiculos.length;
	for (i=0; i<n; i++){
		if (versiculos[i].name == name){ 
			return versiculos[i];
		}
	}
	
	return null;

}
// 2 Tesalonicenses
BibliaKJV.getNomLibTesalonicenses2 = function(){
	return BibliaKJV.tesalonicenses2.libro;
}

BibliaKJV.getNumCapTesalonicenses2 = function(){
	return BibliaKJV.tesalonicenses2.numCapitulos;
}

BibliaKJV.getNumVerCapTesalonicenses2 = function(id){
	var cap = BibliaKJV.tesalonicenses2[id];	
	
	if (cap == null){
		return null;
	}
	
	return cap.numVersiculos;
}

BibliaKJV.getVersiculoTesalonicenses2 = function(id, name){
	var cap = BibliaKJV.tesalonicenses2[id];	

	if (cap == null){
		return null;
	}

	var versiculos = cap.versiculos;
	var i = 0;
	var n = versiculos.length;
	for (i=0; i<n; i++){
		if (versiculos[i].name == name){ 
			return versiculos[i];
		}
	}
	
	return null;

}
// 1 Timoteo
BibliaKJV.getNomLibTimoteo1 = function(){
	return BibliaKJV.timoteo1.libro;
}

BibliaKJV.getNumCapTimoteo1 = function(){
	return BibliaKJV.timoteo1.numCapitulos;
}

BibliaKJV.getNumVerCapTimoteo1 = function(id){
	var cap = BibliaKJV.timoteo1[id];	
	
	if (cap == null){
		return null;
	}
	
	return cap.numVersiculos;
}

BibliaKJV.getVersiculoTimoteo1 = function(id, name){
	var cap = BibliaKJV.timoteo1[id];	

	if (cap == null){
		return null;
	}

	var versiculos = cap.versiculos;
	var i = 0;
	var n = versiculos.length;
	for (i=0; i<n; i++){
		if (versiculos[i].name == name){ 
			return versiculos[i];
		}
	}
	
	return null;

}
// 2 Timoteo
BibliaKJV.getNomLibTimoteo2 = function(){
	return BibliaKJV.timoteo2.libro;
}

BibliaKJV.getNumCapTimoteo2 = function(){
	return BibliaKJV.timoteo2.numCapitulos;
}

BibliaKJV.getNumVerCapTimoteo2 = function(id){
	var cap = BibliaKJV.timoteo2[id];	
	
	if (cap == null){
		return null;
	}
	
	return cap.numVersiculos;
}

BibliaKJV.getVersiculoTimoteo2 = function(id, name){
	var cap = BibliaKJV.timoteo2[id];	

	if (cap == null){
		return null;
	}

	var versiculos = cap.versiculos;
	var i = 0;
	var n = versiculos.length;
	for (i=0; i<n; i++){
		if (versiculos[i].name == name){ 
			return versiculos[i];
		}
	}
	
	return null;

}
// Tito
BibliaKJV.getNomLibTito = function(){
	return BibliaKJV.tito.libro;
}

BibliaKJV.getNumCapTito = function(){
	return BibliaKJV.tito.numCapitulos;
}

BibliaKJV.getNumVerCapTito = function(id){
	var cap = BibliaKJV.tito[id];	
	
	if (cap == null){
		return null;
	}
	
	return cap.numVersiculos;
}

BibliaKJV.getVersiculoTito = function(id, name){
	var cap = BibliaKJV.tito[id];	

	if (cap == null){
		return null;
	}

	var versiculos = cap.versiculos;
	var i = 0;
	var n = versiculos.length;
	for (i=0; i<n; i++){
		if (versiculos[i].name == name){ 
			return versiculos[i];
		}
	}
	
	return null;

}
// Filemon
BibliaKJV.getNomLibFilemon = function(){
	return BibliaKJV.filemon.libro;
}

BibliaKJV.getNumCapFilemon = function(){
	return BibliaKJV.filemon.numCapitulos;
}

BibliaKJV.getNumVerCapFilemon = function(id){
	var cap = BibliaKJV.filemon[id];	
	
	if (cap == null){
		return null;
	}
	
	return cap.numVersiculos;
}

BibliaKJV.getVersiculoFilemon = function(id, name){
	var cap = BibliaKJV.filemon[id];	

	if (cap == null){
		return null;
	}

	var versiculos = cap.versiculos;
	var i = 0;
	var n = versiculos.length;
	for (i=0; i<n; i++){
		if (versiculos[i].name == name){ 
			return versiculos[i];
		}
	}
	
	return null;

}
// Hebreos
BibliaKJV.getNomLibHebreos = function(){
	return BibliaKJV.hebreos.libro;
}

BibliaKJV.getNumCapHebreos = function(){
	return BibliaKJV.hebreos.numCapitulos;
}

BibliaKJV.getNumVerCapHebreos = function(id){
	var cap = BibliaKJV.hebreos[id];	
	
	if (cap == null){
		return null;
	}
	
	return cap.numVersiculos;
}

BibliaKJV.getVersiculoHebreos = function(id, name){
	var cap = BibliaKJV.hebreos[id];	

	if (cap == null){
		return null;
	}

	var versiculos = cap.versiculos;
	var i = 0;
	var n = versiculos.length;
	for (i=0; i<n; i++){
		if (versiculos[i].name == name){ 
			return versiculos[i];
		}
	}
	
	return null;

}
// Santiago
BibliaKJV.getNomLibSantiago = function(){
	return BibliaKJV.santiago.libro;
}

BibliaKJV.getNumCapSantiago = function(){
	return BibliaKJV.santiago.numCapitulos;
}

BibliaKJV.getNumVerCapSantiago = function(id){
	var cap = BibliaKJV.santiago[id];	
	
	if (cap == null){
		return null;
	}
	
	return cap.numVersiculos;
}

BibliaKJV.getVersiculoSantiago = function(id, name){
	var cap = BibliaKJV.santiago[id];	

	if (cap == null){
		return null;
	}

	var versiculos = cap.versiculos;
	var i = 0;
	var n = versiculos.length;
	for (i=0; i<n; i++){
		if (versiculos[i].name == name){ 
			return versiculos[i];
		}
	}
	
	return null;

}
// 1 Pedro
BibliaKJV.getNomLibPedro1 = function(){
	return BibliaKJV.pedro1.libro;
}

BibliaKJV.getNumCapPedro1 = function(){
	return BibliaKJV.pedro1.numCapitulos;
}

BibliaKJV.getNumVerCapPedro1 = function(id){
	var cap = BibliaKJV.pedro1[id];	
	
	if (cap == null){
		return null;
	}
	
	return cap.numVersiculos;
}

BibliaKJV.getVersiculoPedro1 = function(id, name){
	var cap = BibliaKJV.pedro1[id];	

	if (cap == null){
		return null;
	}

	var versiculos = cap.versiculos;
	var i = 0;
	var n = versiculos.length;
	for (i=0; i<n; i++){
		if (versiculos[i].name == name){ 
			return versiculos[i];
		}
	}
	
	return null;

}
// 2 Pedro
BibliaKJV.getNomLibPedro2 = function(){
	return BibliaKJV.pedro2.libro;
}

BibliaKJV.getNumCapPedro2 = function(){
	return BibliaKJV.pedro2.numCapitulos;
}

BibliaKJV.getNumVerCapPedro2 = function(id){
	var cap = BibliaKJV.pedro2[id];	
	
	if (cap == null){
		return null;
	}
	
	return cap.numVersiculos;
}

BibliaKJV.getVersiculoPedro2 = function(id, name){
	var cap = BibliaKJV.pedro2[id];	

	if (cap == null){
		return null;
	}

	var versiculos = cap.versiculos;
	var i = 0;
	var n = versiculos.length;
	for (i=0; i<n; i++){
		if (versiculos[i].name == name){ 
			return versiculos[i];
		}
	}
	
	return null;

}
// 1 Juan
BibliaKJV.getNomLibJuan1 = function(){
	return BibliaKJV.juan1.libro;
}

BibliaKJV.getNumCapJuan1 = function(){
	return BibliaKJV.juan1.numCapitulos;
}

BibliaKJV.getNumVerCapJuan1 = function(id){
	var cap = BibliaKJV.juan1[id];	
	
	if (cap == null){
		return null;
	}
	
	return cap.numVersiculos;
}

BibliaKJV.getVersiculoJuan1 = function(id, name){
	var cap = BibliaKJV.juan1[id];	

	if (cap == null){
		return null;
	}

	var versiculos = cap.versiculos;
	var i = 0;
	var n = versiculos.length;
	for (i=0; i<n; i++){
		if (versiculos[i].name == name){ 
			return versiculos[i];
		}
	}
	
	return null;

}
// 2 Juan
BibliaKJV.getNomLibJuan2 = function(){
	return BibliaKJV.juan2.libro;
}

BibliaKJV.getNumCapJuan2 = function(){
	return BibliaKJV.juan2.numCapitulos;
}

BibliaKJV.getNumVerCapJuan2 = function(id){
	var cap = BibliaKJV.juan2[id];	
	
	if (cap == null){
		return null;
	}
	
	return cap.numVersiculos;
}

BibliaKJV.getVersiculoJuan2 = function(id, name){
	var cap = BibliaKJV.juan2[id];	

	if (cap == null){
		return null;
	}

	var versiculos = cap.versiculos;
	var i = 0;
	var n = versiculos.length;
	for (i=0; i<n; i++){
		if (versiculos[i].name == name){ 
			return versiculos[i];
		}
	}
	
	return null;

}
// 3 Juan
BibliaKJV.getNomLibJuan3 = function(){
	return BibliaKJV.juan3.libro;
}

BibliaKJV.getNumCapJuan3 = function(){
	return BibliaKJV.juan3.numCapitulos;
}

BibliaKJV.getNumVerCapJuan3 = function(id){
	var cap = BibliaKJV.juan3[id];	
	
	if (cap == null){
		return null;
	}
	
	return cap.numVersiculos;
}

BibliaKJV.getVersiculoJuan3 = function(id, name){
	var cap = BibliaKJV.juan3[id];	

	if (cap == null){
		return null;
	}

	var versiculos = cap.versiculos;
	var i = 0;
	var n = versiculos.length;
	for (i=0; i<n; i++){
		if (versiculos[i].name == name){ 
			return versiculos[i];
		}
	}
	
	return null;

}
// Judas
BibliaKJV.getNomLibJudas = function(){
	return BibliaKJV.judas.libro;
}

BibliaKJV.getNumCapJudas = function(){
	return BibliaKJV.judas.numCapitulos;
}

BibliaKJV.getNumVerCapJudas = function(id){
	var cap = BibliaKJV.judas[id];	
	
	if (cap == null){
		return null;
	}
	
	return cap.numVersiculos;
}

BibliaKJV.getVersiculoJudas = function(id, name){
	var cap = BibliaKJV.judas[id];	

	if (cap == null){
		return null;
	}

	var versiculos = cap.versiculos;
	var i = 0;
	var n = versiculos.length;
	for (i=0; i<n; i++){
		if (versiculos[i].name == name){ 
			return versiculos[i];
		}
	}
	
	return null;

}
// Apocalipsis
BibliaKJV.getNomLibApocalipsis = function(){
	return BibliaKJV.apocalipsis.libro;
}

BibliaKJV.getNumCapApocalipsis = function(){
	return BibliaKJV.apocalipsis.numCapitulos;
}

BibliaKJV.getNumVerCapApocalipsis = function(id){
	var cap = BibliaKJV.apocalipsis[id];	
	
	if (cap == null){
		return null;
	}
	
	return cap.numVersiculos;
}

BibliaKJV.getVersiculoApocalipsis = function(id, name){
	var cap = BibliaKJV.apocalipsis[id];	

	if (cap == null){
		return null;
	}

	var versiculos = cap.versiculos;
	var i = 0;
	var n = versiculos.length;
	for (i=0; i<n; i++){
		if (versiculos[i].name == name){ 
			return versiculos[i];
		}
	}
	
	return null;

}

