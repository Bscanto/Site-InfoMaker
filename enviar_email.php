<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nome = $_POST['nome'];
    $email = $_POST['email'];
    $mensagem = $_POST['mensagem'];


    $destinatario = 'bsccanto@gmail.com';
    $assunto = 'Novo formulário de contato';
    $corpo_email = "Nome: $nome\n";
    $corpo_email .= "Email: $email\n";
    $corpo_email .= "Mensagem:\n$mensagem";

    if (mail($destinatario, $assunto, $corpo_email)) {
        echo 'E-mail enviado com sucesso!';
    } else {
        http_response_code(500);
        echo 'Erro ao enviar e-mail.';
    }
} else {
    http_response_code(405);
    echo 'Método não permitido.';
}
?>
