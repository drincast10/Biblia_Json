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


function initialize(){
	console.log("initialize()");

	var biblia = new Biblia();
	// RVR60
	var nombreLibroRVR60 = biblia.loadNomLibRVR60(biblia.libros.genesis);
	var buscarNombreLibroRVR60 = biblia.buscarNombreLibro(biblia.libros.genesis,1,biblia.versiones.RVR60);
	var buscarCapituloRVR60 = biblia.buscarCapitulo(biblia.libros.genesis,1,biblia.versiones.RVR60);
	
	var nombreLibroRVR60_2 = biblia.loadNomLibRVR60(biblia.libros.apocalipsis);
	var buscarNombreLibroRVR60_2 = biblia.buscarNombreLibro(biblia.libros.apocalipsis,22,biblia.versiones.RVR60);
	var buscarCapituloRVR60_2 = biblia.buscarCapitulo(biblia.libros.apocalipsis,22,biblia.versiones.RVR60);
	
	// KJV
	var nombreLibroKJV = biblia.loadNomLibKJV(biblia.libros.genesis);
	var buscarNombreLibroKJV = biblia.buscarNombreLibro(biblia.libros.genesis,1,biblia.versiones.KJV);
	var buscarCapituloKJV = biblia.buscarCapitulo(biblia.libros.genesis,1,biblia.versiones.KJV);
	
	var nombreLibroKJV_2 = biblia.loadNomLibKJV(biblia.libros.apocalipsis);
	var buscarNombreLibroKJV_2 = biblia.buscarNombreLibro(biblia.libros.apocalipsis,22,biblia.versiones.KJV);
	var buscarCapituloKJV_2 = biblia.buscarCapitulo(biblia.libros.apocalipsis,22,biblia.versiones.KJV);
	
	// JFA
	var nombreLibroJFA = biblia.loadNomLibJFA(biblia.libros.genesis);
	var buscarNombreLibroJFA = biblia.buscarNombreLibro(biblia.libros.genesis,1,biblia.versiones.JFA);
	var buscarCapituloJFA = biblia.buscarCapitulo(biblia.libros.genesis,1,biblia.versiones.JFA);

	var nombreLibroJFA_2 = biblia.loadNomLibJFA(biblia.libros.apocalipsis);
	var buscarNombreLibroJFA_2 = biblia.buscarNombreLibro(biblia.libros.apocalipsis,22,biblia.versiones.JFA);
	var buscarCapituloJFA_2 = biblia.buscarCapitulo(biblia.libros.apocalipsis,22,biblia.versiones.JFA);

	$("#texto").append("<br>");
	$("#texto").append(nombreLibroRVR60);
	$("#texto").append("<br>");
	$("#texto").append(buscarNombreLibroRVR60);
	$("#texto").append("<br>");
	$("#texto").append(buscarCapituloRVR60);
	$("#texto").append("<br>");
	$("#texto").append("<br>");
	$("#texto").append("<br>");
	$("#texto").append("<br>");
	$("#texto").append(nombreLibroRVR60_2);
	$("#texto").append("<br>");
	$("#texto").append(buscarNombreLibroRVR60_2);
	$("#texto").append("<br>");
	$("#texto").append(buscarCapituloRVR60_2);
	$("#texto").append("<br>");
	$("#texto").append("<br>");
	$("#texto").append("<br>");
	$("#texto").append("<br>");
	$("#texto").append(nombreLibroKJV);
	$("#texto").append("<br>");
	$("#texto").append(buscarNombreLibroKJV);
	$("#texto").append("<br>");
	$("#texto").append(buscarCapituloKJV);
	$("#texto").append("<br>");
	$("#texto").append("<br>");
	$("#texto").append("<br>");
	$("#texto").append("<br>");
	$("#texto").append(nombreLibroKJV_2);
	$("#texto").append("<br>");
	$("#texto").append(buscarNombreLibroKJV_2);
	$("#texto").append("<br>");
	$("#texto").append(buscarCapituloKJV_2);
	$("#texto").append("<br>");
	$("#texto").append("<br>");
	$("#texto").append("<br>");
	$("#texto").append("<br>");
	$("#texto").append(nombreLibroJFA);
	$("#texto").append("<br>");
	$("#texto").append(buscarNombreLibroJFA);
	$("#texto").append("<br>");
	$("#texto").append(buscarCapituloJFA);
	$("#texto").append("<br>");
	$("#texto").append("<br>");
	$("#texto").append("<br>");
	$("#texto").append("<br>");	
	$("#texto").append(nombreLibroJFA_2);
	$("#texto").append("<br>");
	$("#texto").append(buscarNombreLibroJFA_2);
	$("#texto").append("<br>");
	$("#texto").append(buscarCapituloJFA_2);
	$("#texto").append("<br>");
	$("#texto").append("<br>");
	$("#texto").append("<br>");
	$("#texto").append("<br>");	

}
