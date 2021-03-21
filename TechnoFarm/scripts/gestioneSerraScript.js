$(document).ready(function(){

    $("#Diserbazione").click(function(){

        $("#tutteLeFunzionalita").css({"display": "none"});
        $("#FunzionalitaDiserbazione").css({"display": "block"});

    });

    $("#indietroDiserbazione").click(function(){

        $("#tutteLeFunzionalita").css({"display": "block"});
        $("#FunzionalitaDiserbazione").css({"display": "none"});

    });

    $("#Concimazione").click(function(){

        $("#tutteLeFunzionalita").css({"display": "none"});
        $("#FunzionalitaConcimazione").css({"display": "block"});

    });

    $("#indietroConcimazione").click(function(){

        $("#tutteLeFunzionalita").css({"display": "block"});
        $("#FunzionalitaConcimazione").css({"display": "none"});

    });

    $("#Disinfestazione").click(function(){

        $("#tutteLeFunzionalita").css({"display": "none"});
        $("#FunzionalitaDisinfestazione").css({"display": "block"});

    });

    $("#indietroDisinfestazione").click(function(){

        $("#tutteLeFunzionalita").css({"display": "block"});
        $("#FunzionalitaDisinfestazione").css({"display": "none"});

    });

    $("#Termoventilazione").click(function(){

        $("#tutteLeFunzionalita").css({"display": "none"});
        $("#FunzionalitaTermoventilazione").css({"display": "block"});

    });

    $("#indietroTermoventilazione").click(function(){

        $("#tutteLeFunzionalita").css({"display": "block"});
        $("#FunzionalitaTermoventilazione").css({"display": "none"});

    });

    $("#Umidificazione").click(function(){

        $("#tutteLeFunzionalita").css({"display": "none"});
        $("#FunzionalitaUmidificazione").css({"display": "block"});

    });

    $("#indietroUmidificazione").click(function(){

        $("#tutteLeFunzionalita").css({"display": "block"});
        $("#FunzionalitaUmidificazione").css({"display": "none"});

    });

    $("#Irrigazione").click(function(){

        $("#tutteLeFunzionalita").css({"display": "none"});
        $("#FunzionalitaIrrigazione").css({"display": "block"});

    });

    $("#indietroIrrigazione").click(function(){

        $("#tutteLeFunzionalita").css({"display": "block"});
        $("#FunzionalitaIrrigazione").css({"display": "none"});

    });

    function visualizzaLabelInEsecuzione(){

        if(labelInEsecuzione == 0){

            $("#labelNessunAttivitaInEsecuzione").css({"display": "block"});

        }
        else
        {
            $("#labelNessunAttivitaInEsecuzione").css({"display": "none"});
        }

    }

    function visualizzaLabelProgrammazione(){

        if(labelProgrammazione == 0){

            $("#labelNessunAttivitaProgrammazione").css({"display": "block"});

        }
        else
        {
            $("#labelNessunAttivitaProgrammazione").css({"display": "none"});

        }

    }


    $("#bottoneAttivaOraIrrigazione").change(function(){

        if(pulsanteAttivaIrrigazione == 0)
        {
            labelInEsecuzione++;
            visualizzaLabelInEsecuzione();

            $("#labelAttivaIrrigazione").popover("show");

            var t = setTimeout(function(){$("#labelAttivaIrrigazione").popover("hide");}, 3000);

            $("#esecuzioneIrrigazione").css({"display": "block"});

            var minuti = $("#durataAttivaOraIrrigazione").val();

            $("#esecuzioneIrrigazione").html("Irrigazione in esecuzione per la durate di minuti "+minuti+".");

            pulsanteAttivaIrrigazione = 1;
        }
        else
        {
            labelInEsecuzione--;
            visualizzaLabelInEsecuzione();

            $("#esecuzioneIrrigazione").css({"display": "none"});
            pulsanteAttivaIrrigazione = 0;
        }
    });

    $("#bottoneProgrammazioneIrrigazione").change(function(){

        if(pulsanteProgrammazioneIrrigazione == 0)
        {
            labelProgrammazione++;
            visualizzaLabelProgrammazione();

            $("#labelAttivazioneProgrammataIrrigazione").popover("show");

            var t = setTimeout(function(){$("#labelAttivazioneProgrammataIrrigazione").popover("hide");}, 3000);

            $("#programmazioneIrrigazione").css({"display": "block"});

            var tempoInizio = $("#tempoInizioProgrammazioneIrrigazione").val();

            var tempoFine = $("#tempoFineProgrammazioneIrrigazione").val();

            var checkBox = document.getElementById("lunediIrrigazione");


            if($("#lunediIrrigazione").prop("checked") == true || $("#martediIrrigazione").prop("checked") == true || $("#mercolediIrrigazione").prop("checked") == true
                || $("#giovediIrrigazione").prop("checked") == true || $("#venerdiIrrigazione").prop("checked") == true || $("#sabatoIrrigazione").prop("checked") == true
                ||$("#domenicaIrrigazione").prop("checked") == true){

                var giorniSettimana = "<br>Giorni della settimana in cui attivare irrigazione:";

                if($("#lunediIrrigazione").prop("checked") == true){

                    giorniSettimana +=" luendi;"
                }

                if($("#martediIrrigazione").prop("checked") == true){

                    giorniSettimana +=" martedi;"
                }
                if($("#mercolediIrrigazione").prop("checked") == true){

                    giorniSettimana +=" mercoledi;"
                }

                if($("#giovediIrrigazione").prop("checked") == true){

                    giorniSettimana +=" giovedi;"
                }

                if($("#venerdiIrrigazione").prop("checked") == true){

                    giorniSettimana +=" venerdi; "
                }

                if($("#sabatoIrrigazione").prop("checked") == true){

                    giorniSettimana +=" sabato; "
                }

                if($("#domenicaIrrigazione").prop("checked") == true){

                    giorniSettimana +=" domenica; "
                }

                $("#programmazioneIrrigazione").html("Irrigazione programmata dalle ore "+tempoInizio+" alle ore "+tempoFine+"."+giorniSettimana);
            }
            else
            {
                $("#programmazioneIrrigazione").html("Irrigazione programmata dalle ore "+tempoInizio+" alle ore "+tempoFine+".");
            }
            pulsanteProgrammazioneIrrigazione = 1;
        }
        else
        {
            labelProgrammazione--;
            visualizzaLabelProgrammazione();

            $("#programmazioneIrrigazione").css({"display": "none"});
            pulsanteProgrammazioneIrrigazione = 0;
        }
    });

    $("#bottoneAttivaUmidificazione").change(function(){

        if(pulsanteAttivaUmidificazione == 0)
        {
            labelInEsecuzione++;
            visualizzaLabelInEsecuzione();

            $("#labelAttivaUmidificazione").popover("show");

            var t = setTimeout(function(){$("#labelAttivaUmidificazione").popover("hide");}, 3000);

            $("#esecuzioneUmidificazione").css({"display": "block"});

            var umidita = $("#umiditaAttivaOraUmidificazione").val();

            $("#esecuzioneUmidificazione").html("Umidificazione in esecuzione fino al raggiungimento della soglia del "+umidita+"%.");

            pulsanteAttivaUmidificazione = 1;
        }
        else
        {
            labelInEsecuzione--;
            visualizzaLabelInEsecuzione();

            $("#esecuzioneUmidificazione").css({"display": "none"});
            pulsanteAttivaUmidificazione = 0;
        }
    });

    $("#bottoneProgrammazioneUmidificazione").change(function(){

        if(pulsanteProgrammazioneUmidificazione == 0)
        {
            labelProgrammazione++;
            visualizzaLabelProgrammazione();

            $("#labelAttivazioneProgrammataUmidificazione").popover("show");

            var t = setTimeout(function(){$("#labelAttivazioneProgrammataUmidificazione").popover("hide");}, 3000);

            $("#programmazioneUmidificazione").css({"display": "block"});

            var umiditaMinima = $("#umiditaMinimaProgrammazioneUmidificazione").val();

            var umiditaMassima = $("#umiditaMassimaProgammazioneUmidificazione").val();

            $("#programmazioneUmidificazione").html("Umidificazione programmata al valore minimo del "+umiditaMinima+"% fino al valore massimo del "+umiditaMassima+"%.");

            pulsanteProgrammazioneUmidificazione = 1;
        }
        else
        {
            labelProgrammazione--;
            visualizzaLabelProgrammazione();

            $("#programmazioneUmidificazione").css({"display": "none"});
            pulsanteProgrammazioneUmidificazione = 0;
        }
    });

    $("#bottoneAttivaTermoventilazione").change(function(){

        if(pulsanteAttivaTermoventilazione == 0)
        {
            labelInEsecuzione++;
            visualizzaLabelInEsecuzione();

            $("#labelAttivaTermoventilazione").popover("show");

            var t = setTimeout(function(){$("#labelAttivaTermoventilazione").popover("hide");}, 3000);

            $("#esecuzioneTermoventilazione").css({"display": "block"});

            var temperatura = $("#temperaturaAttivaOraTermoventilazione").val();

            $("#esecuzioneTermoventilazione").html("Termoventilazione in esecuzione fino al raggiungimento della temperatura a "+temperatura+" °C.");

            pulsanteAttivaTermoventilazione = 1;
        }
        else
        {
            labelInEsecuzione--;
            visualizzaLabelInEsecuzione();

            $("#esecuzioneTermoventilazione").css({"display": "none"});
            pulsanteAttivaTermoventilazione = 0;
        }
    });

    $("#bottoneProgrammazioneTermoventilazione").change(function(){

        if(pulsanteProgrammazioneTermoventilazione == 0)
        {
            labelProgrammazione++;
            visualizzaLabelProgrammazione();

            $("#labelAttivazioneProgrammataTermoventilazione").popover("show");

            var t = setTimeout(function(){$("#labelAttivazioneProgrammataTermoventilazione").popover("hide");}, 3000);

            $("#programmazioneTermoventilazione").css({"display": "block"});

            var temperaturaMinima = $("#temperaturaMinimaProgrammazioneTermoventilazione").val();

            var temperaturaMassima = $("#temperaturaMassimaProgrammazioneTermoventilazione").val();

            $("#programmazioneTermoventilazione").html("Termoventilazione programmata a una temperatura minima di "+temperaturaMinima+"°C e a una temperatura massima di "+temperaturaMassima+"°C.");

            pulsanteProgrammazioneTermoventilazione = 1;
        }
        else
        {
            labelProgrammazione--;
            visualizzaLabelProgrammazione();

            $("#programmazioneTermoventilazione").css({"display": "none"});
            pulsanteProgrammazioneTermoventilazione = 0;
        }
    });


    $("#bottoneAttivaConcimazione").change(function(){

        if(pulsanteAttivaConcimazione == 0)
        {
            labelInEsecuzione++;
            visualizzaLabelInEsecuzione();

            $("#labelAttivaConcimazione").popover("show");

            var t = setTimeout(function(){$("#labelAttivaConcimazione").popover("hide");}, 3000);

            $("#esecuzioneConcimazione").css({"display": "block"});

            var ph = $("#phAttivaOraConcimazione").val();
            var tipoConcime = $("#tipoConcimeAttivaOra").val();

            $("#esecuzioneConcimazione").html("Concimazione in esecuzione fino al raggiungimento della soglia di ph a "+ph+".<br>Tipo concime scelto: "+tipoConcime+".");

            pulsanteAttivaConcimazione = 1;
        }
        else
        {
            labelInEsecuzione--;
            visualizzaLabelInEsecuzione();

            $("#esecuzioneConcimazione").css({"display": "none"});
            pulsanteAttivaConcimazione = 0;
        }
    });

    $("#bottoneProgrammazioneConcimazione").change(function(){

        if(pulsanteProgrammazioneConcimazione == 0)
        {
            labelProgrammazione++;
            visualizzaLabelProgrammazione();

            $("#labelAttivazioneProgrammataConcimazione").popover("show");

            var t = setTimeout(function(){$("#labelAttivazioneProgrammataConcimazione").popover("hide");}, 3000);

            $("#programmazioneConcimazione").css({"display": "block"});

            var phMinimo = $("#phMinimoProgrammazioneConcimazione").val();

            var phMassimo = $("#phMassimoProgrammazioneConcimazione").val();

            var tipoConcime = $("#tipoConcimeProgrammazione").val();

            $("#programmazioneConcimazione").html("Concimazione programmata a un ph minimo di "+phMinimo+" a un ph massimo di "+phMassimo+".<br>Tipo di concime scelto "+tipoConcime+".");

            pulsanteProgrammazioneConcimazione = 1;
        }
        else
        {
            labelProgrammazione--;
            visualizzaLabelProgrammazione();

            $("#programmazioneConcimazione").css({"display": "none"});
            pulsanteProgrammazioneConcimazione = 0;
        }
    });

    $("#bottoneAttivaDisinfestazione").change(function(){

        if(pulsanteAttivaDisinfestazione == 0)
        {
            labelInEsecuzione++;
            visualizzaLabelInEsecuzione();

            $("#labelAttivazioneProgrammataConcimazione").popover("show");

            var t = setTimeout(function(){$("#labelAttivazioneProgrammataConcimazione").popover("hide");}, 3000);

            $("#labelAttivaDisinfestazione").popover("show");

            var t = setTimeout(function(){$("#labelAttivaDisinfestazione").popover("hide");}, 3000);

            $("#esecuzioneDisinfestazione").css({"display": "block"});

            var durata = $("#durataMinutiDisinfestazione").val();

            $("#esecuzioneDisinfestazione").html("Disinfestazione in esecuzione; funzionalità impostata per "+durata+" minuti.");

            pulsanteAttivaDisinfestazione = 1;
        }
        else
        {
            labelInEsecuzione--;
            visualizzaLabelInEsecuzione();

            $("#esecuzioneDisinfestazione").css({"display": "none"});
            pulsanteAttivaDisinfestazione = 0;
        }
    });

    $("#bottoneProgrammazioneDisinfestazione").change(function(){

        if(pulsanteProgrammazioneDisinfestazione == 0)
        {
            labelProgrammazione++;
            visualizzaLabelProgrammazione();

            $("#labelAttivazioneProgrammataConcimazione").popover("show");

            var t = setTimeout(function(){$("#labelAttivazioneProgrammataConcimazione").popover("hide");}, 3000);

            $("#labelAttivazioneProgrammataDisinfestazione").popover("show");

            var t = setTimeout(function(){$("#labelAttivazioneProgrammataDisinfestazione").popover("hide");}, 3000);

            $("#programmazioneDisinfestazione").css({"display": "block"});

            var durataInizio = $("#tempoInizioProgrammazioneDisinfestazione").val();

            var durataFine = $("#tempoFineProgammazioneDisinfestazione").val();

            $("#programmazioneDisinfestazione").html("Disinfestazione programmata dalle ore "+durataInizio+" alle ore "+durataFine+".");

            pulsanteProgrammazioneDisinfestazione = 1;
        }
        else
        {
            labelProgrammazione--;
            visualizzaLabelProgrammazione();

            $("#programmazioneDisinfestazione").css({"display": "none"});
            pulsanteProgrammazioneDisinfestazione = 0;
        }
    });


    $("#bottoneAttivaDiserbazione").change(function(){

        if(pulsanteAttivaDiserbazione == 0)
        {
            labelInEsecuzione++;
            visualizzaLabelInEsecuzione();

            $("#labelAttivazioneDiserbazione").popover("show");

            var t = setTimeout(function(){$("#labelAttivazioneDiserbazione").popover("hide");}, 3000);

            $("#esecuzioneDiserbazione").css({"display": "block"});

            var durata = $("#durataMinutiDiserbazione").val();

            $("#esecuzioneDiserbazione").html("Diserbazione in esecuzione; funzionalità impostata per "+durata+" minuti.");

            pulsanteAttivaDiserbazione = 1;
        }
        else
        {
            labelInEsecuzione--;
            visualizzaLabelInEsecuzione();

            $("#esecuzioneDiserbazione").css({"display": "none"});
            pulsanteAttivaDiserbazione = 0;
        }
    });

    $("#bottoneProgrammazioneDiserbazione").change(function(){

        if(pulsanteProgrammazioneDiserbazione == 0)
        {
            labelProgrammazione++;
            visualizzaLabelProgrammazione();

            $("#labelAttivazioneProgrammataDiserbazione").popover("show");

            var t = setTimeout(function(){$("#labelAttivazioneProgrammataDiserbazione").popover("hide");}, 3000);

            $("#programmazioneDiserbazione").css({"display": "block"});

            var durataInizio = $("#tempoInizioProgrammazioneDiserbazione").val();

            var durataFine = $("#tempoFineProgammazioneDiserbazione").val();

            $("#programmazioneDiserbazione").html("Diserbazione programmata dalle ore "+durataInizio+" alle ore "+durataFine+".");

            pulsanteProgrammazioneDiserbazione = 1;
        }
        else
        {
            labelProgrammazione--;
            visualizzaLabelProgrammazione();

            $("#programmazioneDiserbazione").css({"display": "none"});
            pulsanteProgrammazioneDiserbazione = 0;
        }
    });

    var labelInEsecuzione = 0;
    var labelProgrammazione = 0;

    var pulsanteProgrammazioneIrrigazione = 0;
    var pulsanteAttivaIrrigazione = 0;

    var pulsanteProgrammazioneUmidificazione = 0;
    var pulsanteAttivaUmidificazione = 0;

    var pulsanteProgrammazioneTermoventilazione = 0;
    var pulsanteAttivaTermoventilazione = 0;

    var pulsanteProgrammazioneDisinfestazione = 0;
    var pulsanteAttivaDisinfestazione = 0;

    var pulsanteProgrammazioneDiserbazione = 0;
    var pulsanteAttivaDiserbazione = 0;

    var pulsanteProgrammazioneConcimazione = 0;
    var pulsanteAttivaConcimazione = 0;
});