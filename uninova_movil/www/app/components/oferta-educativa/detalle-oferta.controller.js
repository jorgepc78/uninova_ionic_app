(function() {
    'use strict';

    angular
        .module('uninova')
        .controller('DetalleOfertaController', DetalleOfertaController);

    DetalleOfertaController.$inject = ['$scope', '$state','$stateParams', '$ionicScrollDelegate', '$ionicSlideBoxDelegate'];

    function DetalleOfertaController($scope, $state, $stateParams, $ionicScrollDelegate, $ionicSlideBoxDelegate) {

            var vm = this;

            vm.detalleCarrera = {
                nombre          : '',
                objetivo        : '',
                modalidades     : [],
                asignaturas     : []
            };

            vm.toggleGroup = toggleGroup;
            vm.isGroupShown = isGroupShown;
            $scope.onUserDetailContentScroll = onUserDetailContentScroll;
            $scope.like = like;
            
            $ionicSlideBoxDelegate.update();

            inicia();


            function inicia() {
                
                switch ($stateParams.id) {
                    case 'admin':
                        vm.detalleCarrera = {
                            nombre      : 'Administración Aduanera',
                            objetivo    : 'Formar profesionistas emprendedores en el campo de la administración con conocimientos, habilidades y actitudes para desarrollar proyectos aduaneros que alcancen estándares nacionales e internacionales a través de estrategias de negocios y de la aplicacion de políticas comerciales respondiendo a las demandas sociales.',
                            logo        : 'administracionAduanera_white.png',
                            fondo       : 'administracion_fondo.jpg',
                            modalidades : [{
                                name: 'Escolarizado',
                                items: ['<p>- Turno Matutino<br>Días.- Lunes a Viernes<br>Horario.- 7:00 a 13:30 hrs</p><p>- Turno Vespertino<br>Días.- Lunes a Viernes<br>Horario.- 14:30 a 21:00 hrs</p>']
                            },{
                                name: 'InterWeek',
                                items: ['<p>- Turno Vespertino<br>Días.- Martes y Miércoles<br>Horario.- 18:00 a 21:00 hrs</p>']
                            },{
                                name: 'Sábado o Domingo',
                                items: ['<p>- Turno Matutino<br>Día.- Sábado<br>Horario.- 8:00 a 14:30 hrs </p><p>- Turno Vespertino<br>Día.- Sábado<br>Horario.- 15:00 a 21:30 hrs</p><p>- Turno Matutino<br>Día.- Domingo<br>Horario.- 8:00 a 14:30 hrs</p>']
                            }],
                            asignaturas : [{
                                name: '1 er Cuatrimestre',
                                items: ['<p>- Administración</p><p>- Ofimática</p><p>- Metodología de la investigación</p><p>- Comportamiento del consumidor e investigación de mercado</p><p>- Derecho constitucional</p><p>- Introducción al desarrollo sustentable</p>']
                            },{
                                name: '2 do Cuatrimestre',
                                items: ['<p>- Administración de empresas aduanales</p><p>- Fundamentos económicos</p><p>- Introducción de negocios</p><p>- Finanzas</p><p>- Derecho administrativo</p><p>- Sistemas de producción sustentable</p>']
                            },{
                                name: '3 er Cuatrimestre',
                                items: ['<p>- Estructura del sistema aduanero Mexicano</p><p>- Arbitraje comercial</p><p>- Negocio electrónico</p><p>- Políticas comerciales </p><p>- Derecho mercantil</p><p>- Ecología política</p>']
                            },{
                                name: '4 to Cuatrimestre',
                                items: ['<p>- Adquisición de talento</p><p>- Despacho de mercancías</p><p>- Negocios internacionales</p><p>- Regímenes aduaneros</p><p>- Derecho fiscal</p><p>- Compromiso social</p>']
                            },{
                                name: '5 to Cuatrimestre',
                                items: ['<p>- Derecho de propiedad intelectual internacional </p><p>- Elementos de riesgo en inversión extranjera</p><p>- Relaciones internacionales</p><p>- Ley de seguridad nacional</p><p>- Derecho aduanal</p><p>- Valores cooperativistas</p>']
                            },{
                                name: '6 to Cuatrimestre',
                                items: ['<p>- Taller de alta dirección </p><p>- Contrato de compra-venta </p><p>- Negocios en países y mercados específicos</p><p>- Mercadotecnia internacional</p><p>- Seminario</p><p>- Formación de emprendedores</p>']
                            },{
                                name: '7 mo Cuatrimestre',
                                items: ['<p>- Administración de la calidad </p><p>- Inversión extranjera</p><p>- Acuerdo de normas oficiales Mexicanas emitido por la Secretaría de Economía</p><p>- Comercio exterior</p><p>- Seminario</p><p>- Creación y gestión de empresas</p>']
                            },{
                                name: '8 vo Cuatrimestre',
                                items: ['<p>- Movilidad global</p><p>- Trámites y procedimientos aduaneros</p><p>- Patentes, marcas y franquicias</p><p>- Empresas transnacionales</p><p>- Experiencia profesional</p><p>- Experiencia profesional</p>']
                            },{
                                name: '9 no Cuatrimestre',
                                items: ['<p>- Proyecto de movilidad global</p><p>- Tráfico internacional</p><p>- Experiencia profesional</p><p>- Experiencia profesional</p><p>- Experiencia profesional</p><p>- Experiencia profesional</p>']
                            }]
                        };
                        break;

                    case 'comunicacion':
                        vm.detalleCarrera = {
                            nombre      : 'Comunicación y Medios de Producción',
                            objetivo    : 'Formar profesionistas emprendedores en el campo social con conocimientos, habilidades y actitudes para desarrollar proyectos  de comunicación con el uso de técnicas audiovisuales y de producción de medios radiofónicos, televisivos, audiovisuales, con un sentido estético que promueva la ayuda mutua y la consciencia del desarrollo sustentable en atención a las demandas sociales.',
                            logo        : 'comunicacion_white.png',
                            fondo       : 'comunicacion_fondo.jpg',
                            modalidades : [{
                                name: 'Escolarizado',
                                items: ['<p>- Turno Matutino<br>Días.- Lunes a Viernes<br>Horario.- 7:00 a 13:30 hrs</p><p>- Turno Vespertino<br>Días.- Lunes a Viernes<br>Horario.- 14:30 a 21:00 hrs</p>']
                            },{
                                name: 'InterWeek',
                                items: ['<p>- Turno Vespertino<br>Días.- Martes y Miércoles<br>Horario.- 18:00 a 21:00 hrs</p>']
                            },{
                                name: 'Sábado o Domingo',
                                items: ['<p>- Turno Matutino<br>Día.- Sábado<br>Horario.- 8:00 a 14:30 hrs </p><p>- Turno Vespertino<br>Día.- Sábado<br>Horario.- 15:00 a 21:30 hrs</p><p>- Turno Matutino<br>Día.- Domingo<br>Horario.- 8:00 a 14:30 hrs</p>']
                            }],
                            asignaturas : [{
                                name: '1 er Cuatrimestre',
                                items: ['<p>- Introducción a la comunicación</p><p>- Historia de los medios</p><p>- Bases filosóficas de la comunicación</p><p>- Historia del arte</p><p>- Taller de lingüística y fonética</p><p>- Introducción al desarrollo sustentable</p>']
                            },{
                                name: '2 do Cuatrimestre',
                                items: ['<p>- Sociología</p><p>- Taller de creatividad</p><p>- Derecho a la información</p><p>- Taller de arte y estética</p><p>- Semiótica</p><p>- Sistemas de producción sustentable</p>']
                            },{
                                name: '3 er Cuatrimestre',
                                items: ['<p>- Administración organizacional</p><p>- Medios de comunicación masiva</p><p>- Investigación social</p><p>- Relaciones públicas</p><p>- Discurso y expresión oral</p><p>- Ecología política</p>']
                            },{
                                name: '4 to Cuatrimestre',
                                items: ['<p>- Geomarketing</p><p>- Taller de expresión escrita, verbal y no verbal</p><p>- Análisis y diseño de contenidos</p><p>- Comunicación política</p><p>- Realización documental</p><p>- Compromiso social</p>']
                            },{
                                name: '5 to Cuatrimestre',
                                items: ['<p>- Percepción y color</p><p>- Fotografía e imagen digital</p><p>- Fundamentos de la programación en entorno web</p><p>- Diseño y elaboración de paginas web</p><p>- Taller de portadores de texto y tipografía</p><p>- Valores cooperativistas</p>']
                            },{
                                name: '6 to Cuatrimestre',
                                items: ['<p>- Diseño gráfico digital</p><p>- Técnicas audiovisuales</p><p>- Narrativa audiovisual</p><p>- Diseño 3D</p><p>- Seminario</p><p>- Formación de emprendedores</p>']
                            },{
                                name: '7 mo Cuatrimestre',
                                items: ['<p>- Taller de video</p><p>- Edición digital de audio</p><p>- Comunicación radiofónica</p><p>- Técnicas y producción televisiva</p><p>- Seminario</p><p>- Creación y gestión de empresas</p>']
                            },{
                                name: '8 vo Cuatrimestre',
                                items: ['<p>- Guionismo</p><p>- Taller radiofónico</p><p>- Apreciación cinematográfica</p><p>- Propaganda y publicidad</p><p>- Experiencia profesional</p><p>- Experiencia profesional</p>']
                            },{
                                name: '9 no Cuatrimestre',
                                items: ['<p>- Dirección y desenvolvimiento</p><p>- Producción radiofónica</p><p>- Experiencia profesional</p><p>- Experiencia profesional</p><p>- Experiencia profesional</p><p>- Experiencia profesional</p>']
                            }]
                        };
                        break;
                    case 'contaduria':
                        vm.detalleCarrera = {
                            nombre      : 'Contaduría y Finanzas',
                            objetivo    : 'Formar profesionistas emprendedores en el campo de la contabilidad y finanzas con conocimientos, habilidades y actitudes para desarrollar proyectos estratégicos promoviendo el sentido humanista, ayuda mutua y consciencia del desarrollo sustentable en atención a las demandas sociales; con capacidades de planeación y análisis, expertos en presentación e interpretación de información financiera objetiva y oportuna, dirección, organización y control de las actividades y servicios financieros, así como en la toma estratégica de decisiones responsables en todo tipo de entidades nacionales e internacionales.',
                            logo        : 'contaduriayFinanzas_white.png',
                            fondo       : 'contaduria_fondo.jpg',
                            modalidades : [{
                                name: 'Escolarizado',
                                items: ['<p>- Turno Matutino<br>Días.- Lunes a Viernes<br>Horario.- 7:00 a 13:30 hrs</p><p>- Turno Vespertino<br>Días.- Lunes a Viernes<br>Horario.- 14:30 a 21:00 hrs</p>']
                            },{
                                name: 'InterWeek',
                                items: ['<p>- Turno Vespertino<br>Días.- Martes y Miércoles<br>Horario.- 18:00 a 21:00 hrs</p>']
                            },{
                                name: 'Sábado o Domingo',
                                items: ['<p>- Turno Matutino<br>Día.- Sábado<br>Horario.- 8:00 a 14:30 hrs </p><p>- Turno Vespertino<br>Día.- Sábado<br>Horario.- 15:00 a 21:30 hrs</p><p>- Turno Matutino<br>Día.- Domingo<br>Horario.- 8:00 a 14:30 hrs</p>']
                            }],
                            asignaturas : [{
                                name: '1 er Cuatrimestre',
                                items: ['<p>- Introducción a la contabilidad</p><p>- Sistema financiero Mexicano</p><p>- Metodología de la investigación</p><p>- Ofimática</p><p>- Introducción al derecho</p><p>- Introducción al desarrollo sustentable</p>']
                            },{
                                name: '2 do Cuatrimestre',
                                items: ['<p>- Análisis de estados financieros</p><p>- Matemáticas financieras</p><p>- Introducción de negocios</p><p>- Fundamentos económicos</p><p>- Derecho administrativo</p><p>- Sistemas de producción sustentable</p>']
                            },{
                                name: '3 er Cuatrimestre',
                                items: ['<p>- Sistemas contables para la toma de decisiones</p><p>- Finanzas</p><p>- Negocio electrónico</p><p>- Administración</p><p>- Derecho civil</p><p>- Ecología política</p>']
                            },{
                                name: '4 to Cuatrimestre',
                                items: ['<p>- Contabilidad de costos</p><p>- Administración financiera</p><p>- Taller de impuestos</p><p>- Estadística administrativa</p><p>- Derecho mercantil</p><p>- Compromiso social</p>']
                            },{
                                name: '5 to Cuatrimestre',
                                items: ['<p>- Fundamentos de auditoría</p><p>- Finanzas bursatiles</p><p>- Sueldos y salarios</p><p>- Administración de nómina</p><p>- Derecho laboral</p><p>- Valores cooperativistas</p>']
                            },{
                                name: '6 to Cuatrimestre',
                                items: ['<p>- Taller de auditoría</p><p>- Elaboración de proyectos inversión </p><p>- Propiedad intelectual</p><p>- Taller de plataformas y redes sociales para la selección y contratación de personal </p><p>- Seminario </p><p>- Formación de emprendedores</p>']
                            },{
                                name: '7 mo Cuatrimestre',
                                items: ['<p>- Contabilidad corporativa</p><p>- Taller de relaciones públicas</p><p>- Taller de alta dirección</p><p>- Movilidad global</p><p>- Seminario </p><p>- Creación y gestión de empresas</p>']
                            },{
                                name: '8 vo Cuatrimestre',
                                items: ['<p>- Contabilidad internacional</p><p>- Administración de la calidad </p><p>- Plan de negocios</p><p>- Proceso de reclutamiento y selección de personal</p><p>- Experiencia profesional</p><p>- Experiencia profesional</p>']
                            },{
                                name: '9 no Cuatrimestre',
                                items: ['<p>- Contabilidad estratégica</p><p>- Elaboración de proyectos de inversión</p><p>- Experiencia profesional</p><p>- Experiencia profesional</p><p>- Experiencia profesional</p><p>- Experiencia profesional</p>']
                            }]                        
                        };
                        break;
                    case 'derecho':
                        vm.detalleCarrera = {
                            nombre      : 'Derecho y Juicios Orales',
                            objetivo    : 'Formar profesionistas emprendedores en el campo del derecho con conocimientos, habilidades y actitudes en las áreas  jurídico y social para el desarrollo de proyectos conforme al procedimiento penal acusatorio, adversarial y oral con  actuación certera en el litigio mediante la aplicación de conocimientos legales, habilidades  argumentativas con compromiso social.',
                            logo        : 'derechoyJuicios_white.png',
                            fondo       : 'derecho_fondo.jpg',
                            modalidades : [{
                                name: 'Escolarizado',
                                items: ['<p>- Turno Matutino<br>Días.- Lunes a Viernes<br>Horario.- 7:00 a 13:30 hrs</p><p>- Turno Vespertino<br>Días.- Lunes a Viernes<br>Horario.- 14:30 a 21:00 hrs</p>']
                            },{
                                name: 'InterWeek',
                                items: ['<p>- Turno Vespertino<br>Días.- Martes y Miércoles<br>Horario.- 18:00 a 21:00 hrs</p>']
                            },{
                                name: 'Sábado o Domingo',
                                items: ['<p>- Turno Matutino<br>Día.- Sábado<br>Horario.- 8:00 a 14:30 hrs </p><p>- Turno Vespertino<br>Día.- Sábado<br>Horario.- 15:00 a 21:30 hrs</p><p>- Turno Matutino<br>Día.- Domingo<br>Horario.- 8:00 a 14:30 hrs</p>']
                            }],
                            asignaturas : [{
                                name: '1 er Cuatrimestre',
                                items: ['<p>- Metodología jurídica</p><p>- Introducción al derecho penal</p><p>- Introducción al derecho civil</p><p>- Introducción al derecho</p><p>- Introducción a la economía</p><p>- Introducción al desarrollo sustentable</p>']
                            },{
                                name: '2 do Cuatrimestre',
                                items: ['<p>- Sistema oral y acusatorio</p><p>- Teoría del delito en el sistema acusatorio</p><p>- Bienes en el sistema oral civil</p><p>- Historia del derecho mexicano</p><p>- Introducción a las ciencias sociales</p><p>- Sistemas de producción sustentable</p>']
                            },{
                                name: '3 er Cuatrimestre',
                                items: ['<p>- Teoría del caso y delitos en particulares</p><p>- Derecho económico</p><p>- Obligaciones y contratos</p><p>- Derecho constitucional</p><p>- Sociología jurídica</p><p>- Ecología política</p>']
                            },{
                                name: '4 to Cuatrimestre',
                                items: ['<p>- Derecho del trabajo y su juicio oral</p><p>- Ética jurídica</p><p>- Delitos especiales y régimen de excepción</p><p>- Derecho administrativo</p><p>- Derecho social y económico</p><p>- Compromiso social</p>']
                            },{
                                name: '5 to Cuatrimestre',
                                items: ['<p>- El derecho y la oralidad</p><p>- Títulos y operaciones de crédito</p><p>- Derecho mercantil</p><p>- Derecho familiar y sucesorio</p><p>- Derecho del consumidor</p><p>- Valores cooperativistas</p>']
                            },{
                                name: '6 to Cuatrimestre',
                                items: ['<p>- Justicia alternativa y restaurativa oral</p><p>- Taller carpeta de investigación y proceso penal oral</p><p>- Derecho procesal civil oral</p><p>- Contratos mercantiles</p><p>- Seminario</p><p>- Formación de emprendedores</p>']
                            },{
                                name: '7 mo Cuatrimestre',
                                items: ['<p>- Técnicas de litigio oral</p><p>- Amparo</p><p>- Derecho bancario y bursatil</p><p>- Derecho fiscal</p><p>- Seminario</p><p>- Creación y gestión de empresas</p>']
                            },{
                                name: '8 vo Cuatrimestre',
                                items: ['<p>- Taller de expresión, redacción y ortografía</p><p>- Práctica forense de amparo</p><p>- Derecho procesal mercantil oral</p><p>- Derecho de la seguridad social</p><p>- Experiencia profesional</p><p>- Experiencia profesional</p>']
                            },{
                                name: '9 no Cuatrimestre',
                                items: ['<p>- Simulación de audiencias orales en materia penal</p><p>- Ejecución  de sanciones penales</p><p>- Experiencia profesional</p><p>- Experiencia profesional</p><p>- Experiencia profesional</p><p>- Experiencia profesional</p>']
                            }]
                        };
                        break;
                    case 'diseno':
                        vm.detalleCarrera = {
                            nombre      : 'Diseño, Arte y Animación Digital',
                            objetivo    : 'Formar profesionistas emprendedores en el campo del arte con conocimientos, habilidades y actitudes para generar, desarrollar y estructurar proyectos de expresión basados en animación, diseño, técnicas audiovisuales y producción de medios con el objetivo de representar expresiones artísticas creativas que promuevan el sentido humanista, ayuda mutua y consciencia del desarrollo sustentable en atención a las demandas sociales.',
                            logo        : 'DisenoyArte_white.png',
                            fondo       : 'diseno_fondo.jpg',
                            modalidades : [{
                                name: 'Escolarizado',
                                items: ['<p>- Turno Matutino<br>Días.- Lunes a Viernes<br>Horario.- 7:00 a 13:30 hrs</p><p>- Turno Vespertino<br>Días.- Lunes a Viernes<br>Horario.- 14:30 a 21:00 hrs</p>']
                            },{
                                name: 'InterWeek',
                                items: ['<p>- Turno Vespertino<br>Días.- Martes y Miércoles<br>Horario.- 18:00 a 21:00 hrs</p>']
                            },{
                                name: 'Sábado o Domingo',
                                items: ['<p>- Turno Matutino<br>Día.- Sábado<br>Horario.- 8:00 a 14:30 hrs </p><p>- Turno Vespertino<br>Día.- Sábado<br>Horario.- 15:00 a 21:30 hrs</p><p>- Turno Matutino<br>Día.- Domingo<br>Horario.- 8:00 a 14:30 hrs</p>']
                            }],
                            asignaturas : [{
                                name: '1 er Cuatrimestre',
                                items: ['<p>- Historia del arte</p><p>- Métodos de diseño</p><p>- Matemáticas básicas</p><p>- Expresión y dibujo</p><p>- Ciencia y técnica con humanismo</p><p>- Introducción al desarrollo sustentable</p>']
                            },{
                                name: '2 do Cuatrimestre',
                                items: ['<p>- Metodología de investigación</p><p>- Fundamentos del diseño</p><p>- Matemáticas para la animación</p><p>- Dibujo de figura humana</p><p>- Expresión oral y escrita</p><p>- Sistemas de producción sustentable</p>']
                            },{
                                name: '3 er Cuatrimestre',
                                items: ['<p>- Metodología del diseño gráfico</p><p>- Diseño digital</p><p>- Física para el diseño</p><p>- Fundamentos del arte digital</p><p>- Estética</p><p>- Ecología política</p>']
                            },{
                                name: '4 to Cuatrimestre',
                                items: ['<p>- Taller de modelado y diseño</p><p>- Principios de animación</p><p>- Fundamentos y lógica de programación</p><p>- Imagen y fotografía digital</p><p>- Diseño emocional</p><p>- Compromiso social</p>']
                            },{
                                name: '5 to Cuatrimestre',
                                items: ['<p>- Producción y edición de video</p><p>- Efectos visuales y medios digitales</p><p>- Elementos de programación estructurada</p><p>- Lenguaje audiovisual</p><p>- Mercadotecnia</p><p>- Valores cooperativistas</p>']
                            },{
                                name: '6 to Cuatrimestre',
                                items: ['<p>- Representación digital avanzada</p><p>- Arte digital y animación 3D</p><p>- Algoritmos y estructuras de datos</p><p>- Guiones de animación</p><p>- Seminario</p><p>- Formación de emprendedores</p>']
                            },{
                                name: '7 mo Cuatrimestre',
                                items: ['<p>- Semiótica</p><p>- Ambientes virtuales y arte digital</p><p>- Interfaces físicas</p><p>- Producción de audio</p><p>- Seminario</p><p>- Creación y gestión de empresas</p>']
                            },{
                                name: '8 vo Cuatrimestre',
                                items: ['<p>- Producción de diseño digital</p><p>- Presentación profesional de diseño</p><p>- Productos integrales de animación y arte digital</p><p>- Producción digital narrativa</p><p>- Experiencia profesional</p><p>- Experiencia profesional</p>']
                            },{
                                name: '9 no Cuatrimestre',
                                items: ['<p>- Producción cinematográfica digital</p><p>- Diseño de videojuegos</p><p>- Experiencia profesional</p><p>- Experiencia profesional</p><p>- Experiencia profesional</p><p>- Experiencia profesional</p>']
                            }]
                        };
                        break;
                    case 'gestion':
                        vm.detalleCarrera = {
                            nombre      : 'Gestión de Empresas',
                            objetivo    : 'Formar profesionistas emprendedores en el campo de la administración con conocimientos, habilidades y actitudes para desarrollar proyectos estratégicos promoviendo el sentido humanista, ayuda mutua y consciencia del desarrollo sustentable en atención a las demandas sociales; así como la optimización de los recursos humanos y relaciones laborales,  con la implementación de estrategias comunicativas y de alta dirección para el desarrollo organizacional, negocios, selección, reclutamiento de personal, adquisición de talentos y movilidad global, fundamentado en la legalidad.',
                            logo        : 'GestiondeEmpresas_white.png',
                            fondo       : 'gestion_fondo.jpg',
                            modalidades : [{
                                name: 'Escolarizado',
                                items: ['<p>- Turno Matutino<br>Días.- Lunes a Viernes<br>Horario.- 7:00 a 13:30 hrs</p><p>- Turno Vespertino<br>Días.- Lunes a Viernes<br>Horario.- 14:30 a 21:00 hrs</p>']
                            },{
                                name: 'InterWeek',
                                items: ['<p>- Turno Vespertino<br>Días.- Martes y Miércoles<br>Horario.- 18:00 a 21:00 hrs</p>']
                            },{
                                name: 'Sábado o Domingo',
                                items: ['<p>- Turno Matutino<br>Día.- Sábado<br>Horario.- 8:00 a 14:30 hrs </p><p>- Turno Vespertino<br>Día.- Sábado<br>Horario.- 15:00 a 21:30 hrs</p><p>- Turno Matutino<br>Día.- Domingo<br>Horario.- 8:00 a 14:30 hrs</p>']
                            }],
                            asignaturas : [{
                                name: '1 er Cuatrimestre',
                                items: ['<p>- Psicología organzacional</p><p>- Ofimática</p><p>- Metodología de la investigación</p><p>- Comportamiento del consumidor e investigación de mercado</p><p>- Derecho constitucional</p><p>- Introducción al desarrollo sustentable</p>']
                            },{
                                name: '2 do Cuatrimestre',
                                items: ['<p>- Fundamentos económicos</p><p>- Introducción de negocios</p><p>- Finanzas</p><p>- Derecho administrativo</p><p>- Sistemas de producción sustentable</p>']
                            },{
                                name: '3 er Cuatrimestre',
                                items: ['<p>- Administración</p><p>- Negocio electrónico</p><p>- Administración financiera</p><p>- Derecho civil</p><p>- Ecología política</p>']
                            },{
                                name: '4 to Cuatrimestre',
                                items: ['<p>- Estadísticas administrativas</p><p>- Taller de impuestos</p><p>- Análisis de estados financieros</p><p>- Derecho mercantil</p><p>- Compromiso social</p>']
                            },{
                                name: '5 to Cuatrimestre',
                                items: ['<p>- Dirección estratégica de recursos humanos</p><p>- Sueldos y salarios</p><p>- Contabilidad de costos</p><p>- Derecho laboral</p><p>- Valores cooperativistas</p>']
                            },{
                                name: '6 to Cuatrimestre',
                                items: ['<p>- Taller de plataformas y redes sociales para la selección y contratación de personal</p><p>- Propiedad intelectual</p><p>- Administración de nómina</p><p>- Seminario </p><p>- Formación de emprendedores</p>']
                            },{
                                name: '7 mo Cuatrimestre',
                                items: ['<p>- Movilidad global</p><p>- Taller de alta dirección</p><p>- Taller de relaciones públicas</p><p>- Seminario</p><p>- Creación y gestión de empresas</p>']
                            },{
                                name: '8 vo Cuatrimestre',
                                items: ['<p>- Proceso de reclutamiento y selección de personal</p><p>- Plan de negocios</p><p>- Administración de la calidad</p><p>- Experiencia profesional</p><p>- Experiencia profesional</p>']
                            },{
                                name: '9 no Cuatrimestre',
                                items: ['<p>- Marketing de empleo</p><p>- Experiencia profesional</p><p>- Experiencia profesional</p><p>- Experiencia profesional</p><p>- Experiencia profesional</p>']
                            }]
                        };
                        break;
                    case 'linguistica':
                        vm.detalleCarrera = {
                            nombre      : 'lingüística',
                            objetivo    : 'Formar profesionistas emprendedores en el campo de humanidades con conocimientos, habilidades y actitudes para desarrollar proyectos de investigación en el área lingüística, capaces de aportar soluciones a las problemáticas lingüísticas nacionales e internacionales, promover su estudio, preservación y mejorar los procesos comunicativos de los medios de información.',
                            logo        : 'linguistica_white.png',
                            fondo       : 'linguistica_fondo.jpg',
                            modalidades : [{
                                name: 'Escolarizado',
                                items: ['<p>- Turno Matutino<br>Días.- Lunes a Viernes<br>Horario.- 7:00 a 13:30 hrs</p><p>- Turno Vespertino<br>Días.- Lunes a Viernes<br>Horario.- 14:30 a 21:00 hrs</p>']
                            },{
                                name: 'InterWeek',
                                items: ['<p>- Turno Vespertino<br>Días.- Martes y Miércoles<br>Horario.- 18:00 a 21:00 hrs</p>']
                            },{
                                name: 'Sábado o Domingo',
                                items: ['<p>- Turno Matutino<br>Día.- Sábado<br>Horario.- 8:00 a 14:30 hrs </p><p>- Turno Vespertino<br>Día.- Sábado<br>Horario.- 15:00 a 21:30 hrs</p><p>- Turno Matutino<br>Día.- Domingo<br>Horario.- 8:00 a 14:30 hrs</p>']
                            }],
                            asignaturas : [{
                                name: '1 er Cuatrimestre',
                                items: ['<p>- Filosofía del lenguaje</p><p>- Introducción a la filología clásica</p><p>- Teoría de la literatura</p><p>- Lingüística general</p><p>- Taller de comprensión de textos</p><p>- Introducción al desarrollo sustentable</p>']
                            },{
                                name: '2 do Cuatrimestre',
                                items: ['<p>- Historia de la cultura Española y Americana</p><p>- Literatura Española medieval y siglo de oro</p><p>- Fonética y fonología española</p><p>- Lingüística aplicada</p><p>- Sistemas de producción sustentable</p>']
                            },{
                                name: '3 er Cuatrimestre',
                                items: ['<p>- Filología hispánica</p><p>- Literatura prehispánica y novohispana</p><p>- Morfosintaxis española</p><p>- Perspectivas actuales de la lingüística</p><p>- Ecología política</p>']
                            },{
                                name: '4 to Cuatrimestre',
                                items: ['<p>- Historia de la Lengua Española </p><p>- Literatura iberoamericana</p><p>- Semántica y pragmática española</p><p>- Informatica aplicada a la investigación lingüística</p><p>- Compromiso social</p>']
                            },{
                                name: '5 to Cuatrimestre',
                                items: ['<p>- Etnografía del habla Española</p><p>- Literatura Mexicana del siglo XIX  y XX</p><p>- Logopedia</p><p>- Lingüística matemática</p><p>- Valores cooperativistas</p>']
                            },{
                                name: '6 to Cuatrimestre',
                                items: ['<p>- Lengua Española de la comunicación</p><p>- Literatura Española moderna y contemporánea </p><p>- Planificación lingüística </p><p>- Seminario </p><p>- Formación de emprendedores</p>']
                            },{
                                name: '7 mo Cuatrimestre',
                                items: ['<p>- Español de América</p><p>- Literatura Mexicana del siglo XXI</p><p>- Lexicografía</p><p>- Seminario </p><p>- Creación y gestión de empresas</p>']
                            },{
                                name: '8 vo Cuatrimestre',
                                items: ['<p>- Español de México</p><p>- Literatura Española posmoderna </p><p>- Terminología</p><p>- Experiencia profesional</p><p>- Experiencia profesional</p>']
                            },{
                                name: '9 no Cuatrimestre',
                                items: ['<p>- Español en el mundo</p><p>- Experiencia profesional</p><p>- Experiencia profesional</p><p>- Experiencia profesional</p><p>- Experiencia profesional</p>']
                            }]
                        };
                        break;
                    case 'periodismo':
                        vm.detalleCarrera = {
                            nombre      : 'Periodismo',
                            objetivo    : 'Formar profesionistas emprendedores en el campo social con conocimientos, habilidades y actitudes para desarrollar proyectos periodísticos en atención a las demandas sociales y a la globalización capaces de desarrollar investigaciones periodísticas que le permitan planear, producir e informar sobre los nuevos entornos con responsabilidad social y ética.',
                            logo        : 'periodismo_white.png',
                            fondo       : 'periodismo_fondo.jpg',
                            modalidades : [{
                                name: 'Escolarizado',
                                items: ['<p>- Turno Matutino<br>Días.- Lunes a Viernes<br>Horario.- 7:00 a 13:30 hrs</p><p>- Turno Vespertino<br>Días.- Lunes a Viernes<br>Horario.- 14:30 a 21:00 hrs</p>']
                            },{
                                name: 'InterWeek',
                                items: ['<p>- Turno Vespertino<br>Días.- Martes y Miércoles<br>Horario.- 18:00 a 21:00 hrs</p>']
                            },{
                                name: 'Sábado o Domingo',
                                items: ['<p>- Turno Matutino<br>Día.- Sábado<br>Horario.- 8:00 a 14:30 hrs </p><p>- Turno Vespertino<br>Día.- Sábado<br>Horario.- 15:00 a 21:30 hrs</p><p>- Turno Matutino<br>Día.- Domingo<br>Horario.- 8:00 a 14:30 hrs</p>']
                            }],
                            asignaturas : [{
                                name: '1 er Cuatrimestre',
                                items: ['<p>- Introducción a las ciencias de la información </p><p>- Introducción al periodismo</p><p>- Teoría del lenguaje</p><p>- Periodismo, tecnociencia y sociedad</p><p>- Ética periodística</p><p>- Introducción al desarrollo sustentable</p>']
                            },{
                                name: '2 do Cuatrimestre',
                                items: ['<p>- Taller de escritura periodística</p><p>- Semiótica</p><p>- Fundamentación legal en medios digitales</p><p>- Derecho a la información</p><p>- Sistemas de producción sustentable</p>']
                            },{
                                name: '3 er Cuatrimestre',
                                items: ['<p>- Análisis del contenido y análisis del discurso</p><p>- Taller de lingüística y fonética</p><p>- Periodismo interactivo y redes sociales</p><p>- Geopolítica </p><p>- Ecología política</p>']
                            },{
                                name: '4 to Cuatrimestre',
                                items: ['<p>- Redacción periodística</p><p>- Comunicación organizacional y estratégica</p><p>- Fotoperiodismo</p><p>- Régimen jurídico de los medios de información</p><p>- Compromiso social</p>']
                            },{
                                name: '5 to Cuatrimestre',
                                items: ['<p>- Diseño editorial</p><p>- Relaciones públicas </p><p>- Aplicación de métodos estadísticos para investigación</p><p>- Periodismo y derechos humanos</p><p>- Valores cooperativistas</p>']
                            },{
                                name: '6 to Cuatrimestre',
                                items: ['<p>- Periodismo en la red </p><p>- Administración de empresas informativas</p><p>- Escritura para medios digitales</p><p>- Seminario de periodismo deportivo</p><p>- Formación de emprendedores</p>']
                            },{
                                name: '7 mo Cuatrimestre',
                                items: ['<p>- Periodismo radiofónico y televisivo</p><p>- Comunicación radiofónica y televisiva</p><p>- Taller de edición periodística</p><p>- Seminario de periodismo cultural</p><p>- Creación y gestión de empresas</p>']
                            },{
                                name: '8 vo Cuatrimestre',
                                items: ['<p>- Seminario de periodismo político</p><p>- Taller de análisis y comentarios en radio y televisión</p><p>- Investigación de tendencias en el ámbito periodístico</p><p>- Experiencia profesional</p><p>- Experiencia profesional</p>']
                            },{
                                name: '9 no Cuatrimestre',
                                items: ['<p>- Taller de textos periodístico en inglés</p><p>- Experiencia profesional</p><p>- Experiencia profesional</p><p>- Experiencia profesional</p><p>- Experiencia profesional</p>']
                            }]
                        };
                        break;
                    case 'planeacion':
                        vm.detalleCarrera = {
                            nombre      : 'Planeación y Evaluación Educativa',
                            objetivo    : 'Formar profesionistas emprendedores en el campo de la administración con conocimientos, habilidades y actitudes para desarrollar proyectos de planeación, dirección y operación en el ámbito educativo con la finalidad de definir estrategias  que promuevan el sentido humanista, ayuda mutua y  consciencia del desarrollo sustentable en atención a las demandas sociales.',
                            logo        : 'planeacion_white.png',
                            fondo       : 'planeacion_fondo.jpg',
                            modalidades : [{
                                name: 'Escolarizado',
                                items: ['<p>- Turno Matutino<br>Días.- Lunes a Viernes<br>Horario.- 7:00 a 13:30 hrs</p><p>- Turno Vespertino<br>Días.- Lunes a Viernes<br>Horario.- 14:30 a 21:00 hrs</p>']
                            },{
                                name: 'InterWeek',
                                items: ['<p>- Turno Vespertino<br>Días.- Martes y Miércoles<br>Horario.- 18:00 a 21:00 hrs</p>']
                            },{
                                name: 'Sábado o Domingo',
                                items: ['<p>- Turno Matutino<br>Día.- Sábado<br>Horario.- 8:00 a 14:30 hrs </p><p>- Turno Vespertino<br>Día.- Sábado<br>Horario.- 15:00 a 21:30 hrs</p><p>- Turno Matutino<br>Día.- Domingo<br>Horario.- 8:00 a 14:30 hrs</p>']
                            }],
                            asignaturas : [{
                                name: '1 er Cuatrimestre',
                                items: ['<p>- Metodología de la investigación educativa</p><p>- Teoría de la organización</p><p>- Matemáticas aplicada</p><p>- Introducción a la economía </p><p>- Filosofía de la educación</p><p>- Introducción al desarrollo sustentable</p>']
                            },{
                                name: '2 do Cuatrimestre',
                                items: ['<p>- Gestión educativa</p><p>- Estadística diferencial</p><p>- Procesos administrativos</p><p>- Historia de la educación y reformas educativas</p><p>- Sistemas de producción sustentable</p>']
                            },{
                                name: '3 er Cuatrimestre',
                                items: ['<p>- Gestión institucional</p><p>- Estadística inferencial</p><p>- Introducción a la contabilidad</p><p>- Educación y globalización </p><p>- Ecología política</p>']
                            },{
                                name: '4 to Cuatrimestre',
                                items: ['<p>- Gestión de recursos humanos</p><p>- Estadística e indicadores educativos</p><p>- Contabilidad de costos</p><p>- Legislación educativa en México</p><p>- Compromiso social</p>']
                            },{
                                name: '5 to Cuatrimestre',
                                items: ['<p>- Gestión curricular</p><p>- Análisis de regresión</p><p>- Análisis e interpretación de estados financieros</p><p>- Políticas educativas</p><p>- Valores cooperativistas</p>']
                            },{
                                name: '6 to Cuatrimestre',
                                items: ['<p>- Gestión financiera</p><p>- Estudios de opinión</p><p>- Matemáticas financieras</p><p>- Educación comparada</p><p>- Formación de emprendedores</p>']
                            },{
                                name: '7 mo Cuatrimestre',
                                items: ['<p>- Sistemas de gestión de calidad en las organizaciones</p><p>- Taller de estudios de opinión para la educación</p><p>- Análisis de finanzas públicas en educación</p><p>- Educación basada en competencias</p><p>- Creación y gestión de empresas</p>']
                            },{
                                name: '8 vo Cuatrimestre',
                                items: ['<p>- Diseño y evaluación de proyectos educativos</p><p>- Elaboración de informes de estudios de opinión para la educación</p><p>- Finanzas en las organizaciones educativas</p><p>- Experiencia profesional</p><p>- Experiencia profesional</p>']
                            },{
                                name: '9 no Cuatrimestre',
                                items: ['<p>- Seminario</p><p>- Experiencia profesional</p><p>- Experiencia profesional</p><p>- Experiencia profesional</p><p>- Experiencia profesional</p>']
                            }]
                        };
                        break;
                    case 'urbanismo':
                        vm.detalleCarrera = {
                            nombre      : 'Urbanismo Sustentable',
                            objetivo    : 'Formar profesionistas emprendedores en el campo de urbanismo con conocimientos, habilidades y actitudes para desarrollar proyectos estratégicos promoviendo el sentido humanista, ayuda mutua y consciencia del desarrollo sustentable en atención a las demandas sociales, así como dar soluciones a los problemas derivados del crecimiento y expansión urbana, integrando aspectos de estética, sustentabilidad y funcionalidad, en todas las escalas con una visión regional e internacional.',
                            logo        : 'urbanismoSustentable_white.png',
                            fondo       : 'urbanismo_fondo.jpg',
                            modalidades : [{
                                name: 'Escolarizado',
                                items: ['<p>- Turno Matutino<br>Días.- Lunes a Viernes<br>Horario.- 7:00 a 13:30 hrs</p><p>- Turno Vespertino<br>Días.- Lunes a Viernes<br>Horario.- 14:30 a 21:00 hrs</p>']
                            },{
                                name: 'InterWeek',
                                items: ['<p>- Turno Vespertino<br>Días.- Martes y Miércoles<br>Horario.- 18:00 a 21:00 hrs</p>']
                            },{
                                name: 'Sábado o Domingo',
                                items: ['<p>- Turno Matutino<br>Día.- Sábado<br>Horario.- 8:00 a 14:30 hrs </p><p>- Turno Vespertino<br>Día.- Sábado<br>Horario.- 15:00 a 21:30 hrs</p><p>- Turno Matutino<br>Día.- Domingo<br>Horario.- 8:00 a 14:30 hrs</p>']
                            }],
                            asignaturas : [{
                                name: '1 er Cuatrimestre',
                                items: ['<p>- Representación arquitectónica 2D</p><p>- Métodos de diseño arquitectónico</p><p>- Matemáticas básicas</p><p>- Expresión y dibujo</p><p>- Análisis histórico de ciudades</p><p>- Introducción al desarrollo sustentable</p>']
                            },{
                                name: '2 do Cuatrimestre',
                                items: ['<p>- Metodología de la investigación</p><p>- Matemáticas aplicadas</p><p>- Instalaciones hidrosanitarias</p><p>- Análisis histórico de planeaciones internacionales</p><p>- Sistemas de producción sustentable</p>']
                            },{
                                name: '3 er Cuatrimestre',
                                items: ['<p>- Sistemas estructurales básicos</p><p>- Procesos y elementos constructivos</p><p>- Instalaciones eléctricas y especiales</p><p>- Principios de diseño arquitectónico</p><p>- Ecología política</p>']
                            },{
                                name: '4 to Cuatrimestre',
                                items: ['<p>- Análisis estructurales</p><p>- Proyectos ejecutivos</p><p>- Instalaciones urbanas</p><p>- Derecho urbano</p><p>- Compromiso social</p>']
                            },{
                                name: '5 to Cuatrimestre',
                                items: ['<p>- Economía urbana</p><p>- Programas BIM</p><p>- Taller arquitectónico</p><p>- Sociología urbana</p><p>- Valores cooperativistas</p>']
                            },{
                                name: '6 to Cuatrimestre',
                                items: ['<p>- Principios y  diseño urbano</p><p>- Planeación urbano regional</p><p>- Ecotecnias</p><p>- Urbanismo ecológico</p><p>- Formación de emprendedores</p>']
                            },{
                                name: '7 mo Cuatrimestre',
                                items: ['<p>- Sistemas urbanos</p><p>- Geografía urbana</p><p>- Estructuras urbanas</p><p>- Seminario</p><p>- Creación y gestión de empresas</p>']
                            },{
                                name: '8 vo Cuatrimestre',
                                items: ['<p>- Sistemas de información geográfica<br>regional</p><p>- Seminario</p><p>- Gestión territorial</p><p>- Experiencia profesional</p><p>- Experiencia profesional</p>']
                            },{
                                name: '9 no Cuatrimestre',
                                items: ['<p>- Financiamiento urbano</p><p>- Experiencia profesional</p><p>- Experiencia profesional</p><p>- Experiencia profesional</p><p>- Experiencia profesional</p>']
                            }]
                        };
                        break;
                }
            }


            function toggleGroup(group) {
                if (vm.isGroupShown(group)) {
                  vm.shownGroup = null;
                } else {
                  vm.shownGroup = group;
                }
            };

            function isGroupShown(group) {
                return vm.shownGroup === group;
            };


            function like(){
                $scope.liked = true
            }

            function onUserDetailContentScroll(){
                var scrollDelegate = $ionicScrollDelegate.$getByHandle('userDetailContent');
                var scrollView = scrollDelegate.getScrollView();
                $scope.$broadcast('userDetailContent.scroll', scrollView);
            }
    };

})();