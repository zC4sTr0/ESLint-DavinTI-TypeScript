engine.debug('Vamos pegar o usuario');

var user_email = engine.getLoggedUser().getEmail();
if (user_email !== '') {
    engine.debug('Usuario logado: ' + user_email);
}