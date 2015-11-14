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

var BibliaJFA = {
	version: "JFA",
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
BibliaJFA.getNomLibGenesis = function(){
	return BibliaJFA.genesis.libro;
}

BibliaJFA.getNumCapGenesis = function(){
	return BibliaJFA.genesis.numCapitulos;
}

BibliaJFA.getNumVerCapGenesis = function(id){
	var cap = BibliaJFA.genesis[id];	// id = c1, por ejemplo
	
	if (cap == null){
		return null;
	}
	
	return cap.numVersiculos;
}


BibliaJFA.getVersiculoGenesis = function(id, name){
	var cap = BibliaJFA.genesis[id];	// id = c1, por ejemplo

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
BibliaJFA.getNomLibExodo = function(){
	return BibliaJFA.exodo.libro;
}

BibliaJFA.getNumCapExodo = function(){
	return BibliaJFA.exodo.numCapitulos;
}

BibliaJFA.getNumVerCapExodo = function(id){
	var cap = BibliaJFA.exodo[id];	
	
	if (cap == null){
		return null;
	}
	
	return cap.numVersiculos;
}

BibliaJFA.getVersiculoExodo = function(id, name){
	var cap = BibliaJFA.exodo[id];	

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
BibliaJFA.getNomLibLevitico = function(){
	return BibliaJFA.levitico.libro;
}

BibliaJFA.getNumCapLevitico = function(){
	return BibliaJFA.levitico.numCapitulos;
}

BibliaJFA.getNumVerCapLevitico = function(id){
	var cap = BibliaJFA.levitico[id];	
	
	if (cap == null){
		return null;
	}
	
	return cap.numVersiculos;
}

BibliaJFA.getVersiculoLevitico = function(id, name){
	var cap = BibliaJFA.levitico[id];	

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
BibliaJFA.getNomLibNumeros = function(){
	return BibliaJFA.numeros.libro;
}

BibliaJFA.getNumCapNumeros = function(){
	return BibliaJFA.numeros.numCapitulos;
}

BibliaJFA.getNumVerCapNumeros = function(id){
	var cap = BibliaJFA.numeros[id];	
	
	if (cap == null){
		return null;
	}
	
	return cap.numVersiculos;
}

BibliaJFA.getVersiculoNumeros = function(id, name){
	var cap = BibliaJFA.numeros[id];	

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
BibliaJFA.getNomLibDeuteronomio = function(){
	return BibliaJFA.deuteronomio.libro;
}

BibliaJFA.getNumCapDeuteronomio = function(){
	return BibliaJFA.deuteronomio.numCapitulos;
}

BibliaJFA.getNumVerCapDeuteronomio = function(id){
	var cap = BibliaJFA.deuteronomio[id];	
	
	if (cap == null){
		return null;
	}
	
	return cap.numVersiculos;
}

BibliaJFA.getVersiculoDeuteronomio = function(id, name){
	var cap = BibliaJFA.deuteronomio[id];	

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
BibliaJFA.getNomLibJosue = function(){
	return BibliaJFA.josue.libro;
}

BibliaJFA.getNumCapJosue = function(){
	return BibliaJFA.josue.numCapitulos;
}

BibliaJFA.getNumVerCapJosue = function(id){
	var cap = BibliaJFA.josue[id];	
	
	if (cap == null){
		return null;
	}
	
	return cap.numVersiculos;
}

BibliaJFA.getVersiculoJosue = function(id, name){
	var cap = BibliaJFA.josue[id];	

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
BibliaJFA.getNomLibJueces = function(){
	return BibliaJFA.jueces.libro;
}

BibliaJFA.getNumCapJueces = function(){
	return BibliaJFA.jueces.numCapitulos;
}

BibliaJFA.getNumVerCapJueces = function(id){
	var cap = BibliaJFA.jueces[id];	
	
	if (cap == null){
		return null;
	}
	
	return cap.numVersiculos;
}

BibliaJFA.getVersiculoJueces = function(id, name){
	var cap = BibliaJFA.jueces[id];	

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
BibliaJFA.getNomLibRut = function(){
	return BibliaJFA.rut.libro;
}

BibliaJFA.getNumCapRut = function(){
	return BibliaJFA.rut.numCapitulos;
}

BibliaJFA.getNumVerCapRut = function(id){
	var cap = BibliaJFA.rut[id];	
	
	if (cap == null){
		return null;
	}
	
	return cap.numVersiculos;
}

BibliaJFA.getVersiculoRut = function(id, name){
	var cap = BibliaJFA.rut[id];	

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
BibliaJFA.getNomLibSamuel1 = function(){
	return BibliaJFA.samuel1.libro;
}

BibliaJFA.getNumCapSamuel1 = function(){
	return BibliaJFA.samuel1.numCapitulos;
}

BibliaJFA.getNumVerCapSamuel1 = function(id){
	var cap = BibliaJFA.samuel1[id];	
	
	if (cap == null){
		return null;
	}
	
	return cap.numVersiculos;
}

BibliaJFA.getVersiculoSamuel1 = function(id, name){
	var cap = BibliaJFA.samuel1[id];	

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
BibliaJFA.getNomLibSamuel2 = function(){
	return BibliaJFA.samuel2.libro;
}

BibliaJFA.getNumCapSamuel2 = function(){
	return BibliaJFA.samuel2.numCapitulos;
}

BibliaJFA.getNumVerCapSamuel2 = function(id){
	var cap = BibliaJFA.samuel2[id];	
	
	if (cap == null){
		return null;
	}
	
	return cap.numVersiculos;
}

BibliaJFA.getVersiculoSamuel2 = function(id, name){
	var cap = BibliaJFA.samuel2[id];	

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
BibliaJFA.getNomLibReyes1 = function(){
	return BibliaJFA.reyes1.libro;
}

BibliaJFA.getNumCapReyes1 = function(){
	return BibliaJFA.reyes1.numCapitulos;
}

BibliaJFA.getNumVerCapReyes1 = function(id){
	var cap = BibliaJFA.reyes1[id];	
	
	if (cap == null){
		return null;
	}
	
	return cap.numVersiculos;
}

BibliaJFA.getVersiculoReyes1 = function(id, name){
	var cap = BibliaJFA.reyes1[id];	

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
BibliaJFA.getNomLibReyes2 = function(){
	return BibliaJFA.reyes2.libro;
}

BibliaJFA.getNumCapReyes2 = function(){
	return BibliaJFA.reyes2.numCapitulos;
}

BibliaJFA.getNumVerCapReyes2 = function(id){
	var cap = BibliaJFA.reyes2[id];	
	
	if (cap == null){
		return null;
	}
	
	return cap.numVersiculos;
}

BibliaJFA.getVersiculoReyes2 = function(id, name){
	var cap = BibliaJFA.reyes2[id];	

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
BibliaJFA.getNomLibCronicas1 = function(){
	return BibliaJFA.cronicas1.libro;
}

BibliaJFA.getNumCapCronicas1 = function(){
	return BibliaJFA.cronicas1.numCapitulos;
}

BibliaJFA.getNumVerCapCronicas1 = function(id){
	var cap = BibliaJFA.cronicas1[id];	
	
	if (cap == null){
		return null;
	}
	
	return cap.numVersiculos;
}

BibliaJFA.getVersiculoCronicas1 = function(id, name){
	var cap = BibliaJFA.cronicas1[id];	

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
BibliaJFA.getNomLibCronicas2 = function(){
	return BibliaJFA.cronicas2.libro;
}

BibliaJFA.getNumCapCronicas2 = function(){
	return BibliaJFA.cronicas2.numCapitulos;
}

BibliaJFA.getNumVerCapCronicas2 = function(id){
	var cap = BibliaJFA.cronicas2[id];	
	
	if (cap == null){
		return null;
	}
	
	return cap.numVersiculos;
}

BibliaJFA.getVersiculoCronicas2 = function(id, name){
	var cap = BibliaJFA.cronicas2[id];	

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
BibliaJFA.getNomLibEsdras = function(){
	return BibliaJFA.esdras.libro;
}

BibliaJFA.getNumCapEsdras = function(){
	return BibliaJFA.esdras.numCapitulos;
}

BibliaJFA.getNumVerCapEsdras = function(id){
	var cap = BibliaJFA.esdras[id];	
	
	if (cap == null){
		return null;
	}
	
	return cap.numVersiculos;
}

BibliaJFA.getVersiculoEsdras = function(id, name){
	var cap = BibliaJFA.esdras[id];	

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
BibliaJFA.getNomLibNehemias = function(){
	return BibliaJFA.nehemias.libro;
}

BibliaJFA.getNumCapNehemias = function(){
	return BibliaJFA.nehemias.numCapitulos;
}

BibliaJFA.getNumVerCapNehemias = function(id){
	var cap = BibliaJFA.nehemias[id];	
	
	if (cap == null){
		return null;
	}
	
	return cap.numVersiculos;
}

BibliaJFA.getVersiculoNehemias = function(id, name){
	var cap = BibliaJFA.nehemias[id];	

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
BibliaJFA.getNomLibEster = function(){
	return BibliaJFA.ester.libro;
}

BibliaJFA.getNumCapEster = function(){
	return BibliaJFA.ester.numCapitulos;
}

BibliaJFA.getNumVerCapEster = function(id){
	var cap = BibliaJFA.ester[id];	
	
	if (cap == null){
		return null;
	}
	
	return cap.numVersiculos;
}

BibliaJFA.getVersiculoEster = function(id, name){
	var cap = BibliaJFA.ester[id];	

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
BibliaJFA.getNomLibJob = function(){
	return BibliaJFA.job.libro;
}

BibliaJFA.getNumCapJob = function(){
	return BibliaJFA.job.numCapitulos;
}

BibliaJFA.getNumVerCapJob = function(id){
	var cap = BibliaJFA.job[id];	
	
	if (cap == null){
		return null;
	}
	
	return cap.numVersiculos;
}

BibliaJFA.getVersiculoJob = function(id, name){
	var cap = BibliaJFA.job[id];	

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
BibliaJFA.getNomLibSalmos = function(){
	return BibliaJFA.salmos.libro;
}

BibliaJFA.getNumCapSalmos = function(){
	return BibliaJFA.salmos.numCapitulos;
}

BibliaJFA.getNumVerCapSalmos = function(id){
	var cap = BibliaJFA.salmos[id];	
	
	if (cap == null){
		return null;
	}
	
	return cap.numVersiculos;
}

BibliaJFA.getVersiculoSalmos = function(id, name){
	var cap = BibliaJFA.salmos[id];	

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
BibliaJFA.getNomLibProverbios = function(){
	return BibliaJFA.proverbios.libro;
}

BibliaJFA.getNumCapProverbios = function(){
	return BibliaJFA.proverbios.numCapitulos;
}

BibliaJFA.getNumVerCapProverbios = function(id){
	var cap = BibliaJFA.proverbios[id];	
	
	if (cap == null){
		return null;
	}
	
	return cap.numVersiculos;
}

BibliaJFA.getVersiculoProverbios = function(id, name){
	var cap = BibliaJFA.proverbios[id];	

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
BibliaJFA.getNomLibEclesiastes = function(){
	return BibliaJFA.eclesiastes.libro;
}

BibliaJFA.getNumCapEclesiastes = function(){
	return BibliaJFA.eclesiastes.numCapitulos;
}

BibliaJFA.getNumVerCapEclesiastes = function(id){
	var cap = BibliaJFA.eclesiastes[id];	
	
	if (cap == null){
		return null;
	}
	
	return cap.numVersiculos;
}

BibliaJFA.getVersiculoEclesiastes = function(id, name){
	var cap = BibliaJFA.eclesiastes[id];	

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
BibliaJFA.getNomLibCantares = function(){
	return BibliaJFA.cantares.libro;
}

BibliaJFA.getNumCapCantares = function(){
	return BibliaJFA.cantares.numCapitulos;
}

BibliaJFA.getNumVerCapCantares = function(id){
	var cap = BibliaJFA.cantares[id];	
	
	if (cap == null){
		return null;
	}
	
	return cap.numVersiculos;
}

BibliaJFA.getVersiculoCantares = function(id, name){
	var cap = BibliaJFA.cantares[id];	

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
BibliaJFA.getNomLibIsaias = function(){
	return BibliaJFA.isaias.libro;
}

BibliaJFA.getNumCapIsaias = function(){
	return BibliaJFA.isaias.numCapitulos;
}

BibliaJFA.getNumVerCapIsaias = function(id){
	var cap = BibliaJFA.isaias[id];	
	
	if (cap == null){
		return null;
	}
	
	return cap.numVersiculos;
}

BibliaJFA.getVersiculoIsaias = function(id, name){
	var cap = BibliaJFA.isaias[id];	

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
BibliaJFA.getNomLibJeremias = function(){
	return BibliaJFA.jeremias.libro;
}

BibliaJFA.getNumCapJeremias = function(){
	return BibliaJFA.jeremias.numCapitulos;
}

BibliaJFA.getNumVerCapJeremias = function(id){
	var cap = BibliaJFA.jeremias[id];	
	
	if (cap == null){
		return null;
	}
	
	return cap.numVersiculos;
}

BibliaJFA.getVersiculoJeremias = function(id, name){
	var cap = BibliaJFA.jeremias[id];	

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
BibliaJFA.getNomLibLamentaciones = function(){
	return BibliaJFA.lamentaciones.libro;
}

BibliaJFA.getNumCapLamentaciones = function(){
	return BibliaJFA.lamentaciones.numCapitulos;
}

BibliaJFA.getNumVerCapLamentaciones = function(id){
	var cap = BibliaJFA.lamentaciones[id];	
	
	if (cap == null){
		return null;
	}
	
	return cap.numVersiculos;
}

BibliaJFA.getVersiculoLamentaciones = function(id, name){
	var cap = BibliaJFA.lamentaciones[id];	

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
BibliaJFA.getNomLibEzequiel = function(){
	return BibliaJFA.ezequiel.libro;
}

BibliaJFA.getNumCapEzequiel = function(){
	return BibliaJFA.ezequiel.numCapitulos;
}

BibliaJFA.getNumVerCapEzequiel = function(id){
	var cap = BibliaJFA.ezequiel[id];	
	
	if (cap == null){
		return null;
	}
	
	return cap.numVersiculos;
}

BibliaJFA.getVersiculoEzequiel = function(id, name){
	var cap = BibliaJFA.ezequiel[id];	

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
BibliaJFA.getNomLibDaniel = function(){
	return BibliaJFA.daniel.libro;
}

BibliaJFA.getNumCapDaniel = function(){
	return BibliaJFA.daniel.numCapitulos;
}

BibliaJFA.getNumVerCapDaniel = function(id){
	var cap = BibliaJFA.daniel[id];	
	
	if (cap == null){
		return null;
	}
	
	return cap.numVersiculos;
}

BibliaJFA.getVersiculoDaniel = function(id, name){
	var cap = BibliaJFA.daniel[id];	

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
BibliaJFA.getNomLibOseas = function(){
	return BibliaJFA.oseas.libro;
}

BibliaJFA.getNumCapOseas = function(){
	return BibliaJFA.oseas.numCapitulos;
}

BibliaJFA.getNumVerCapOseas = function(id){
	var cap = BibliaJFA.oseas[id];	
	
	if (cap == null){
		return null;
	}
	
	return cap.numVersiculos;
}

BibliaJFA.getVersiculoOseas = function(id, name){
	var cap = BibliaJFA.oseas[id];	

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
BibliaJFA.getNomLibJoel = function(){
	return BibliaJFA.joel.libro;
}

BibliaJFA.getNumCapJoel = function(){
	return BibliaJFA.joel.numCapitulos;
}

BibliaJFA.getNumVerCapJoel = function(id){
	var cap = BibliaJFA.joel[id];	
	
	if (cap == null){
		return null;
	}
	
	return cap.numVersiculos;
}

BibliaJFA.getVersiculoJoel = function(id, name){
	var cap = BibliaJFA.joel[id];	

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
BibliaJFA.getNomLibAmos = function(){
	return BibliaJFA.amos.libro;
}

BibliaJFA.getNumCapAmos = function(){
	return BibliaJFA.amos.numCapitulos;
}

BibliaJFA.getNumVerCapAmos = function(id){
	var cap = BibliaJFA.amos[id];	
	
	if (cap == null){
		return null;
	}
	
	return cap.numVersiculos;
}

BibliaJFA.getVersiculoAmos = function(id, name){
	var cap = BibliaJFA.amos[id];	

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
BibliaJFA.getNomLibAbdias = function(){
	return BibliaJFA.abdias.libro;
}

BibliaJFA.getNumCapAbdias = function(){
	return BibliaJFA.abdias.numCapitulos;
}

BibliaJFA.getNumVerCapAbdias = function(id){
	var cap = BibliaJFA.abdias[id];	
	
	if (cap == null){
		return null;
	}
	
	return cap.numVersiculos;
}

BibliaJFA.getVersiculoAbdias = function(id, name){
	var cap = BibliaJFA.abdias[id];	

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
BibliaJFA.getNomLibJonas = function(){
	return BibliaJFA.jonas.libro;
}

BibliaJFA.getNumCapJonas = function(){
	return BibliaJFA.jonas.numCapitulos;
}

BibliaJFA.getNumVerCapJonas = function(id){
	var cap = BibliaJFA.jonas[id];	
	
	if (cap == null){
		return null;
	}
	
	return cap.numVersiculos;
}

BibliaJFA.getVersiculoJonas = function(id, name){
	var cap = BibliaJFA.jonas[id];	

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
BibliaJFA.getNomLibMiqueas = function(){
	return BibliaJFA.miqueas.libro;
}

BibliaJFA.getNumCapMiqueas = function(){
	return BibliaJFA.miqueas.numCapitulos;
}

BibliaJFA.getNumVerCapMiqueas = function(id){
	var cap = BibliaJFA.miqueas[id];	
	
	if (cap == null){
		return null;
	}
	
	return cap.numVersiculos;
}

BibliaJFA.getVersiculoMiqueas = function(id, name){
	var cap = BibliaJFA.miqueas[id];	

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
BibliaJFA.getNomLibNahum = function(){
	return BibliaJFA.nahum.libro;
}

BibliaJFA.getNumCapNahum = function(){
	return BibliaJFA.nahum.numCapitulos;
}

BibliaJFA.getNumVerCapNahum = function(id){
	var cap = BibliaJFA.nahum[id];	
	
	if (cap == null){
		return null;
	}
	
	return cap.numVersiculos;
}

BibliaJFA.getVersiculoNahum = function(id, name){
	var cap = BibliaJFA.nahum[id];	

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
BibliaJFA.getNomLibHabacuc = function(){
	return BibliaJFA.habacuc.libro;
}

BibliaJFA.getNumCapHabacuc = function(){
	return BibliaJFA.habacuc.numCapitulos;
}

BibliaJFA.getNumVerCapHabacuc = function(id){
	var cap = BibliaJFA.habacuc[id];	
	
	if (cap == null){
		return null;
	}
	
	return cap.numVersiculos;
}

BibliaJFA.getVersiculoHabacuc = function(id, name){
	var cap = BibliaJFA.habacuc[id];	

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
BibliaJFA.getNomLibSofonias = function(){
	return BibliaJFA.sofonias.libro;
}

BibliaJFA.getNumCapSofonias = function(){
	return BibliaJFA.sofonias.numCapitulos;
}

BibliaJFA.getNumVerCapSofonias = function(id){
	var cap = BibliaJFA.sofonias[id];	
	
	if (cap == null){
		return null;
	}
	
	return cap.numVersiculos;
}

BibliaJFA.getVersiculoSofonias = function(id, name){
	var cap = BibliaJFA.sofonias[id];	

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
BibliaJFA.getNomLibHageo = function(){
	return BibliaJFA.hageo.libro;
}

BibliaJFA.getNumCapHageo = function(){
	return BibliaJFA.hageo.numCapitulos;
}

BibliaJFA.getNumVerCapHageo = function(id){
	var cap = BibliaJFA.hageo[id];	
	
	if (cap == null){
		return null;
	}
	
	return cap.numVersiculos;
}

BibliaJFA.getVersiculoHageo = function(id, name){
	var cap = BibliaJFA.hageo[id];	

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
BibliaJFA.getNomLibZacarias = function(){
	return BibliaJFA.zacarias.libro;
}

BibliaJFA.getNumCapZacarias = function(){
	return BibliaJFA.zacarias.numCapitulos;
}

BibliaJFA.getNumVerCapZacarias = function(id){
	var cap = BibliaJFA.zacarias[id];	
	
	if (cap == null){
		return null;
	}
	
	return cap.numVersiculos;
}

BibliaJFA.getVersiculoZacarias = function(id, name){
	var cap = BibliaJFA.zacarias[id];	

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
BibliaJFA.getNomLibMalaquias = function(){
	return BibliaJFA.malaquias.libro;
}

BibliaJFA.getNumCapMalaquias = function(){
	return BibliaJFA.malaquias.numCapitulos;
}

BibliaJFA.getNumVerCapMalaquias = function(id){
	var cap = BibliaJFA.malaquias[id];	
	
	if (cap == null){
		return null;
	}
	
	return cap.numVersiculos;
}

BibliaJFA.getVersiculoMalaquias = function(id, name){
	var cap = BibliaJFA.malaquias[id];	

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
BibliaJFA.getNomLibMateo = function(){
	return BibliaJFA.mateo.libro;
}

BibliaJFA.getNumCapMateo = function(){
	return BibliaJFA.mateo.numCapitulos;
}

BibliaJFA.getNumVerCapMateo = function(id){
	var cap = BibliaJFA.mateo[id];	
	
	if (cap == null){
		return null;
	}
	
	return cap.numVersiculos;
}

BibliaJFA.getVersiculoMateo = function(id, name){
	var cap = BibliaJFA.mateo[id];	

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
BibliaJFA.getNomLibMarcos = function(){
	return BibliaJFA.marcos.libro;
}

BibliaJFA.getNumCapMarcos = function(){
	return BibliaJFA.marcos.numCapitulos;
}

BibliaJFA.getNumVerCapMarcos = function(id){
	var cap = BibliaJFA.marcos[id];	
	
	if (cap == null){
		return null;
	}
	
	return cap.numVersiculos;
}

BibliaJFA.getVersiculoMarcos = function(id, name){
	var cap = BibliaJFA.marcos[id];	

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
BibliaJFA.getNomLibLucas = function(){
	return BibliaJFA.lucas.libro;
}

BibliaJFA.getNumCapLucas = function(){
	return BibliaJFA.lucas.numCapitulos;
}

BibliaJFA.getNumVerCapLucas = function(id){
	var cap = BibliaJFA.lucas[id];	
	
	if (cap == null){
		return null;
	}
	
	return cap.numVersiculos;
}

BibliaJFA.getVersiculoLucas = function(id, name){
	var cap = BibliaJFA.lucas[id];	

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
BibliaJFA.getNomLibJuan = function(){
	return BibliaJFA.juan.libro;
}

BibliaJFA.getNumCapJuan = function(){
	return BibliaJFA.juan.numCapitulos;
}

BibliaJFA.getNumVerCapJuan = function(id){
	var cap = BibliaJFA.juan[id];	
	
	if (cap == null){
		return null;
	}
	
	return cap.numVersiculos;
}

BibliaJFA.getVersiculoJuan = function(id, name){
	var cap = BibliaJFA.juan[id];	

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
BibliaJFA.getNomLibHechos = function(){
	return BibliaJFA.hechos.libro;
}

BibliaJFA.getNumCapHechos = function(){
	return BibliaJFA.hechos.numCapitulos;
}

BibliaJFA.getNumVerCapHechos = function(id){
	var cap = BibliaJFA.hechos[id];	
	
	if (cap == null){
		return null;
	}
	
	return cap.numVersiculos;
}

BibliaJFA.getVersiculoHechos = function(id, name){
	var cap = BibliaJFA.hechos[id];	

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
BibliaJFA.getNomLibRomanos = function(){
	return BibliaJFA.romanos.libro;
}

BibliaJFA.getNumCapRomanos = function(){
	return BibliaJFA.romanos.numCapitulos;
}

BibliaJFA.getNumVerCapRomanos = function(id){
	var cap = BibliaJFA.romanos[id];	
	
	if (cap == null){
		return null;
	}
	
	return cap.numVersiculos;
}

BibliaJFA.getVersiculoRomanos = function(id, name){
	var cap = BibliaJFA.romanos[id];	

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
BibliaJFA.getNomLibCorintios1 = function(){
	return BibliaJFA.corintios1.libro;
}

BibliaJFA.getNumCapCorintios1 = function(){
	return BibliaJFA.corintios1.numCapitulos;
}

BibliaJFA.getNumVerCapCorintios1 = function(id){
	var cap = BibliaJFA.corintios1[id];	
	
	if (cap == null){
		return null;
	}
	
	return cap.numVersiculos;
}

BibliaJFA.getVersiculoCorintios1 = function(id, name){
	var cap = BibliaJFA.corintios1[id];	

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
BibliaJFA.getNomLibCorintios2 = function(){
	return BibliaJFA.corintios2.libro;
}

BibliaJFA.getNumCapCorintios2 = function(){
	return BibliaJFA.corintios2.numCapitulos;
}

BibliaJFA.getNumVerCapCorintios2 = function(id){
	var cap = BibliaJFA.corintios2[id];	
	
	if (cap == null){
		return null;
	}
	
	return cap.numVersiculos;
}

BibliaJFA.getVersiculoCorintios2 = function(id, name){
	var cap = BibliaJFA.corintios2[id];	

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
BibliaJFA.getNomLibGalatas = function(){
	return BibliaJFA.galatas.libro;
}

BibliaJFA.getNumCapGalatas = function(){
	return BibliaJFA.galatas.numCapitulos;
}

BibliaJFA.getNumVerCapGalatas = function(id){
	var cap = BibliaJFA.galatas[id];	
	
	if (cap == null){
		return null;
	}
	
	return cap.numVersiculos;
}

BibliaJFA.getVersiculoGalatas = function(id, name){
	var cap = BibliaJFA.galatas[id];	

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
BibliaJFA.getNomLibEfesios = function(){
	return BibliaJFA.efesios.libro;
}

BibliaJFA.getNumCapEfesios = function(){
	return BibliaJFA.efesios.numCapitulos;
}

BibliaJFA.getNumVerCapEfesios = function(id){
	var cap = BibliaJFA.efesios[id];	
	
	if (cap == null){
		return null;
	}
	
	return cap.numVersiculos;
}

BibliaJFA.getVersiculoEfesios = function(id, name){
	var cap = BibliaJFA.efesios[id];	

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
BibliaJFA.getNomLibFilipenses = function(){
	return BibliaJFA.filipenses.libro;
}

BibliaJFA.getNumCapFilipenses = function(){
	return BibliaJFA.filipenses.numCapitulos;
}

BibliaJFA.getNumVerCapFilipenses = function(id){
	var cap = BibliaJFA.filipenses[id];	
	
	if (cap == null){
		return null;
	}
	
	return cap.numVersiculos;
}

BibliaJFA.getVersiculoFilipenses = function(id, name){
	var cap = BibliaJFA.filipenses[id];	

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
BibliaJFA.getNomLibColosenses = function(){
	return BibliaJFA.colosenses.libro;
}

BibliaJFA.getNumCapColosenses = function(){
	return BibliaJFA.colosenses.numCapitulos;
}

BibliaJFA.getNumVerCapColosenses = function(id){
	var cap = BibliaJFA.colosenses[id];	
	
	if (cap == null){
		return null;
	}
	
	return cap.numVersiculos;
}

BibliaJFA.getVersiculoColosenses = function(id, name){
	var cap = BibliaJFA.colosenses[id];	

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
BibliaJFA.getNomLibTesalonicenses1 = function(){
	return BibliaJFA.tesalonicenses1.libro;
}

BibliaJFA.getNumCapTesalonicenses1 = function(){
	return BibliaJFA.tesalonicenses1.numCapitulos;
}

BibliaJFA.getNumVerCapTesalonicenses1 = function(id){
	var cap = BibliaJFA.tesalonicenses1[id];	
	
	if (cap == null){
		return null;
	}
	
	return cap.numVersiculos;
}

BibliaJFA.getVersiculoTesalonicenses1 = function(id, name){
	var cap = BibliaJFA.tesalonicenses1[id];	

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
BibliaJFA.getNomLibTesalonicenses2 = function(){
	return BibliaJFA.tesalonicenses2.libro;
}

BibliaJFA.getNumCapTesalonicenses2 = function(){
	return BibliaJFA.tesalonicenses2.numCapitulos;
}

BibliaJFA.getNumVerCapTesalonicenses2 = function(id){
	var cap = BibliaJFA.tesalonicenses2[id];	
	
	if (cap == null){
		return null;
	}
	
	return cap.numVersiculos;
}

BibliaJFA.getVersiculoTesalonicenses2 = function(id, name){
	var cap = BibliaJFA.tesalonicenses2[id];	

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
BibliaJFA.getNomLibTimoteo1 = function(){
	return BibliaJFA.timoteo1.libro;
}

BibliaJFA.getNumCapTimoteo1 = function(){
	return BibliaJFA.timoteo1.numCapitulos;
}

BibliaJFA.getNumVerCapTimoteo1 = function(id){
	var cap = BibliaJFA.timoteo1[id];	
	
	if (cap == null){
		return null;
	}
	
	return cap.numVersiculos;
}

BibliaJFA.getVersiculoTimoteo1 = function(id, name){
	var cap = BibliaJFA.timoteo1[id];	

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
BibliaJFA.getNomLibTimoteo2 = function(){
	return BibliaJFA.timoteo2.libro;
}

BibliaJFA.getNumCapTimoteo2 = function(){
	return BibliaJFA.timoteo2.numCapitulos;
}

BibliaJFA.getNumVerCapTimoteo2 = function(id){
	var cap = BibliaJFA.timoteo2[id];	
	
	if (cap == null){
		return null;
	}
	
	return cap.numVersiculos;
}

BibliaJFA.getVersiculoTimoteo2 = function(id, name){
	var cap = BibliaJFA.timoteo2[id];	

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
BibliaJFA.getNomLibTito = function(){
	return BibliaJFA.tito.libro;
}

BibliaJFA.getNumCapTito = function(){
	return BibliaJFA.tito.numCapitulos;
}

BibliaJFA.getNumVerCapTito = function(id){
	var cap = BibliaJFA.tito[id];	
	
	if (cap == null){
		return null;
	}
	
	return cap.numVersiculos;
}

BibliaJFA.getVersiculoTito = function(id, name){
	var cap = BibliaJFA.tito[id];	

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
BibliaJFA.getNomLibFilemon = function(){
	return BibliaJFA.filemon.libro;
}

BibliaJFA.getNumCapFilemon = function(){
	return BibliaJFA.filemon.numCapitulos;
}

BibliaJFA.getNumVerCapFilemon = function(id){
	var cap = BibliaJFA.filemon[id];	
	
	if (cap == null){
		return null;
	}
	
	return cap.numVersiculos;
}

BibliaJFA.getVersiculoFilemon = function(id, name){
	var cap = BibliaJFA.filemon[id];	

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
BibliaJFA.getNomLibHebreos = function(){
	return BibliaJFA.hebreos.libro;
}

BibliaJFA.getNumCapHebreos = function(){
	return BibliaJFA.hebreos.numCapitulos;
}

BibliaJFA.getNumVerCapHebreos = function(id){
	var cap = BibliaJFA.hebreos[id];	
	
	if (cap == null){
		return null;
	}
	
	return cap.numVersiculos;
}

BibliaJFA.getVersiculoHebreos = function(id, name){
	var cap = BibliaJFA.hebreos[id];	

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
BibliaJFA.getNomLibSantiago = function(){
	return BibliaJFA.santiago.libro;
}

BibliaJFA.getNumCapSantiago = function(){
	return BibliaJFA.santiago.numCapitulos;
}

BibliaJFA.getNumVerCapSantiago = function(id){
	var cap = BibliaJFA.santiago[id];	
	
	if (cap == null){
		return null;
	}
	
	return cap.numVersiculos;
}

BibliaJFA.getVersiculoSantiago = function(id, name){
	var cap = BibliaJFA.santiago[id];	

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
BibliaJFA.getNomLibPedro1 = function(){
	return BibliaJFA.pedro1.libro;
}

BibliaJFA.getNumCapPedro1 = function(){
	return BibliaJFA.pedro1.numCapitulos;
}

BibliaJFA.getNumVerCapPedro1 = function(id){
	var cap = BibliaJFA.pedro1[id];	
	
	if (cap == null){
		return null;
	}
	
	return cap.numVersiculos;
}

BibliaJFA.getVersiculoPedro1 = function(id, name){
	var cap = BibliaJFA.pedro1[id];	

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
BibliaJFA.getNomLibPedro2 = function(){
	return BibliaJFA.pedro2.libro;
}

BibliaJFA.getNumCapPedro2 = function(){
	return BibliaJFA.pedro2.numCapitulos;
}

BibliaJFA.getNumVerCapPedro2 = function(id){
	var cap = BibliaJFA.pedro2[id];	
	
	if (cap == null){
		return null;
	}
	
	return cap.numVersiculos;
}

BibliaJFA.getVersiculoPedro2 = function(id, name){
	var cap = BibliaJFA.pedro2[id];	

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
BibliaJFA.getNomLibJuan1 = function(){
	return BibliaJFA.juan1.libro;
}

BibliaJFA.getNumCapJuan1 = function(){
	return BibliaJFA.juan1.numCapitulos;
}

BibliaJFA.getNumVerCapJuan1 = function(id){
	var cap = BibliaJFA.juan1[id];	
	
	if (cap == null){
		return null;
	}
	
	return cap.numVersiculos;
}

BibliaJFA.getVersiculoJuan1 = function(id, name){
	var cap = BibliaJFA.juan1[id];	

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
BibliaJFA.getNomLibJuan2 = function(){
	return BibliaJFA.juan2.libro;
}

BibliaJFA.getNumCapJuan2 = function(){
	return BibliaJFA.juan2.numCapitulos;
}

BibliaJFA.getNumVerCapJuan2 = function(id){
	var cap = BibliaJFA.juan2[id];	
	
	if (cap == null){
		return null;
	}
	
	return cap.numVersiculos;
}

BibliaJFA.getVersiculoJuan2 = function(id, name){
	var cap = BibliaJFA.juan2[id];	

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
BibliaJFA.getNomLibJuan3 = function(){
	return BibliaJFA.juan3.libro;
}

BibliaJFA.getNumCapJuan3 = function(){
	return BibliaJFA.juan3.numCapitulos;
}

BibliaJFA.getNumVerCapJuan3 = function(id){
	var cap = BibliaJFA.juan3[id];	
	
	if (cap == null){
		return null;
	}
	
	return cap.numVersiculos;
}

BibliaJFA.getVersiculoJuan3 = function(id, name){
	var cap = BibliaJFA.juan3[id];	

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
BibliaJFA.getNomLibJudas = function(){
	return BibliaJFA.judas.libro;
}

BibliaJFA.getNumCapJudas = function(){
	return BibliaJFA.judas.numCapitulos;
}

BibliaJFA.getNumVerCapJudas = function(id){
	var cap = BibliaJFA.judas[id];	
	
	if (cap == null){
		return null;
	}
	
	return cap.numVersiculos;
}

BibliaJFA.getVersiculoJudas = function(id, name){
	var cap = BibliaJFA.judas[id];	

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
BibliaJFA.getNomLibApocalipsis = function(){
	return BibliaJFA.apocalipsis.libro;
}

BibliaJFA.getNumCapApocalipsis = function(){
	return BibliaJFA.apocalipsis.numCapitulos;
}

BibliaJFA.getNumVerCapApocalipsis = function(id){
	var cap = BibliaJFA.apocalipsis[id];	
	
	if (cap == null){
		return null;
	}
	
	return cap.numVersiculos;
}

BibliaJFA.getVersiculoApocalipsis = function(id, name){
	var cap = BibliaJFA.apocalipsis[id];	

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
