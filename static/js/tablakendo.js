var data = jQuery.parseJSON(propiedadesList.replace(/(&quot\;)/g,"\""));
        var propiedades = [];
        $.each( data, function( key, value ) {
            propiedades.push(value.fields);
        });
        console.log(data);
       // console.log(datos);
        console.log(propiedades);
        $(document).ready(function () {
            $("#grid").kendoGrid({
                dataSource: {
                    type: "odata",
                    data: propiedades,
                    pageSize: 10
                },
                height: 550,
                groupable: true,
                sortable: true,
                filterable: true,
                pageable: {
                    refresh: true,
                    pageSizes: true,
                    buttonCount: 5
                },
                columns: [
                 /*   template: "",
                    field: "id",
                    title: "Número Referencia",
                    width: 240
                },*/ {
                    field: "pub_date",
                    title: "Fecha de Publicación"
                }, {
                    field: "superficie",
                    title: "Superficie"
                }, {
                    field: "construccion",
                    title: "Construcción"
                },{
                    field: "recamaras",
                    title: "Número de Recamaras"
                }],
                columnMenu: {
                    messages: {
                      columns: "Mostrar Columnas",
                      filter: "Filtros",
                      sortAscending: "Ordenar (asc)",
                      sortDescending: "Ordenar (desc)",
                      groupable: "Agrupar",
                      itemsPerPage: "Propiedades por página"
                    }
                  },
                  filterable: {
                    messages: {
                        info: "Título:", // sets the text on top of the filter menu
                        filter: "Filtrar", // sets the text for the "Filter" button
                        clear: "Limpar", // sets the text for the "Clear" button
                         
                        // when filtering boolean numbers
                        isTrue: "es verdadero", // sets the text for "isTrue" radio button
                        isFalse: "es falso", // sets the text for "isFalse" radio button
                         
                        //changes the text of the "And" and "Or" of the filter menu
                        and: "Y",
                        or: "O"
                    },
                    operators: {
                        //filter menu for "string" type columns
                        string: {
                            eq: "Igual a",
                            neq: "Diferente de",
                            startswith: "Comienza con",
                            contains: "Contiene",
                            endswith: "Termina en"
                        },
                        //filter menu for "number" type columns
                        number: {
                            eq: "Igual a",
                            neq: "Diferente de",
                            gte: "Mayor que o igual a",
                            gt: "Mayor que",
                            lte: "Menor que o igual a",
                            lt: "Menor que"
                        },
                        //filter menu for "date" type columns
                        date: {
                            eq: "Igual a",
                            neq: "Diferente de",
                            gte: "Mayor que o igual a",
                            gt: "Mayor que",
                            lte: "Menor que o igual a",
                            lt: "Menor que"
                        }
                    }
                },
              groupable: {
                messages: {
                  empty: "Arraste colunas aqui para agrupar"
                }
              },pageable: {
                messages: {
                  display: "{0} - {1} de {2} propiedades", //{0} is the index of the first record on the page, {1} - index of the last record on the page, {2} is the total amount of records
                  empty: "No hay propiedades para mostrar",
                  page: "Página",
                  of: "de {0}", //{0} is total amount of pages
                  itemsPerPage: "Propiedades por página",
                  first: "Ir a la primera página",
                  previous: "Ir a la página anterior",
                  next: "Ir a la página siguiente",
                  last: "Ir a la última página",
                  refresh: "Actualizar"
                 }
              }
            });
        });