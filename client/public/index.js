$(document).ready(function() {
    (function ($) {
        var handler = Plaid.create({
            apiVersion: 'v2',
            clientName: 'Plaid Walkthrough Demo',
            env: 'sandbox',
            product: ['transactions'],
            key: 'ed76b143b07519a9822c2451a8a3df',
            onSuccess: function (public_token) {
                $.post('/api/get_access_token', {
                    public_token: public_token
                }, function () {
                    $('#container').fadeOut('fast', function () {
                        $('#intro').hide();
                        $('#app, #steps').fadeIn('slow');
                    });
                });
            },
        });

        $('#link-btn').on('click', function (e) {
            handler.open();
        });

        $('#get-accounts-btn').on('click', function (e) {
            $.get('/api/accounts', function (data) {
                $('#get-accounts-data').slideUp(function () {
                    var html = '';
                    data.accounts.forEach(function (account, idx) {
                        html += '<div class="inner">';
                        html += '<strong>' + account.name +
                            ' $' + (account.balances.available != null ? account.balances.available : account.balances.current) + '</strong><br>';
                        html += account.subtype + ' ' + account.mask;
                        html += '</div>';
                    });

                    $(this).html(html).slideDown();
                });
            });
        });

        $('#get-item-btn').on('click', function (e) {
            $.post('/api/item', function (data) {
                $('#get-item-data').slideUp(function () {
                    if (data.error)
                        $(this).html('<p>' + data.error + '</p>').slideDown();
                    else {
                        var html = '<div class="inner">';
                        html += '<p>Here\'s some basic information about your Item:</p>';
                        html += '<p>Institution name:' + data.institution.name + '</p>';
                        html += '<p>Billed products: ' + data.item.billed_products.join(', ') + '</p>';
                        html += '<p>Available products: ' + data.item.available_products.join(', ') + '</p>';
                        html += '</div>';

                        $(this).html(html).slideDown();
                    }
                });
            });
        });

        $('#get-transactions-btn').on('click', function (e) {
            $.post('/api/transactions', function (data) {
                if (data.error != null) {
                    // Format the error
                    var errorHtml = '<div class="inner"><p>' +
                        '<strong>' + data.error.error_code + ':</strong> ' +
                        data.error.error_message + '</p></div>';

                    if (data.error.error_code === 'PRODUCT_NOT_READY') {
                        // Add additional context for `PRODUCT_NOT_READY` errors
                        errorHtml += '<div class="inner"><p>The PRODUCT_NOT_READY ' +
                            'error is returned when a request to retrieve Transaction data ' +
                            'is made before Plaid finishes the <a href="https://plaid.com/' +
                            'docs/quickstart/#transaction-data-with-webhooks">initial ' +
                            'transaction pull.</a></p></div>';
                    }
                    // Render the error
                    $('#get-transactions-data').slideUp(function () {
                        $(this).slideUp(function () {
                            $(this).html(errorHtml).slideDown();
                        });
                    });
                } else {
                    $('#get-transactions-data').slideUp(function () {
                        var html = '';
                        data.transactions.forEach(function (txn, idx) {
                            html += '<div class="inner">';
                            html += '<strong>' + txn.name + '</strong><br>';
                            html += '$' + txn.amount;
                            html += '<br><em>' + txn.date + '</em>';
                            html += '</div>';
                        });

                        $(this).slideUp(function () {
                            $(this).html(html).slideDown();
                        });
                    });
                }
            });
        });
    })(jQuery);
});