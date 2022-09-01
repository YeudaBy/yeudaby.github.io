$( document ).ready(() => {
    $("#hk-options").hide();
    $("#regular").change(() => {
        $("#hk-options").hide();
        $("#regular-options").show("fast");
    })
    $("#hk").change(() => {
        $("#regular-options").hide();
        $("#hk-options").show("fast");
    })
});