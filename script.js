function gerarContrato() {
    const nomeContratante = document.getElementById('nomeContratante').value;
    const rgCpf = document.getElementById('rgCpf').value;

    const dataAtual = new Date();
    const dia = dataAtual.getDate().toString().padStart(2, '0');
    const mes = (dataAtual.getMonth() + 1).toString().padStart(2, '0');
    const ano = dataAtual.getFullYear();
    const horas = dataAtual.getHours().toString().padStart(2, '0');
    const minutos = dataAtual.getMinutes().toString().padStart(2, '0');

    const contratoHTML = `
        <h2>Das Partes</h2>
        <p>Razão social da empresa, CNPJ, com sede na endereço completo, representada neste ato por seu sócio administrador nome completo, nacionalidade, estado civil, profissão, portador do RG nº e do CPF nº, residente e domiciliado na endereço completo, denominada CONTRATADA.</p>
        <p>Nome completo do Contratante: ${nomeContratante}</p>
        <p>RG/CPF: ${rgCpf}</p>
        <p>Neste ato denominado CONTRATANTE.</p>
        <h2>Do objeto do contrato e do orçamento</h2>
        <p>O presente contrato tem como OBJETO a prestação de serviços de decoração da FESTA DE especificar com serviço de descrever: flores, toalhas de mesa, arranjos, etc., conforme orçamento de nº que faz parte deste contrato, para o total de x mesas, nos moldes e forma especificados neste contrato.</p>
        <p>Parágrafo Único: Os serviços da CONTRATADA serão prestados no especificar o local, no dia dia, mês e ano, às horas.</p>
        <h2>Dos materiais e serviços</h2>
        <p>Para a decoração do salão de festa, a CONTRATADA se compromete a fornecer todo material necessário para a execução dos arranjos de mesa, mesas, cadeiras, capas de cadeira, toalhas, guardanapos, copos, talheres, pratos - sendo todo o material em prata e inox.</p>
        <h2>Do preço e das condições de pagamento</h2>
        <p>O CONTRATANTE pagará à CONTRATADA o valor de valor em reais da seguinte forma: especificar.</p>
        <h2>Cláusula penal</h2>
        <p>Em caso de danos à decoração durante a festa, causados por ação direta ou negligência do CONTRATANTE ou de seus convidados, este se compromete a arcar com os custos de reparo ou reposição, conforme avaliação.</p>
        <p>Caso o CONTRATANTE desista de promover a festa contratada, ou seja, o evento seja cancelado por sua culpa, ficam estipuladas as seguintes cláusulas penais:<br>
        a) Até 06 (seis) meses antes do evento, será devolvido 90% da importância paga;<br>
        b) Até 05 (cinco) meses antes do evento, será devolvido 85% da importância paga;<br>
        c) Até 04 (quatro) meses antes do evento, será devolvido 80% da importância paga;<br>
        d) Até 03 (três) meses antes do evento, será devolvido 75% da importância paga;<br>
        e) Até 02 (dois) meses antes do evento, será devolvido 70% da importância paga.<br>
        Parágrafo único. Em outros casos, não será devolvida nenhuma importância paga, salvo se o evento não se realizar por caso fortuito ou força maior, ocasião em que será devolvido o percentual de 50% do valor contratado.</p>
        <h2>Das disposições finais</h2>
        <p>As partes elegem o foro da comarca de especificar "cidade/UF" com exclusão de qualquer outro, por mais privilegiado que seja, para resolver qualquer litígio que porventura venha a surgir em razão do presente contrato.</p>
        <p>E, por estarem justas e contratadas, as partes assinam este instrumento, em duas vias de igual teor, com as testemunhas Nome completo das testemunhas, que a tudo presenciaram.</p>
        <p>Nome da cidade: Cáceres</p>
        <p>Dia, mês e ano da solicitação: ${dia}/${mes}/${ano} às ${horas}:${minutos}</p>
        <br>
        <p>Assinatura Contratante ________________________</p>
        <p>Assinatura Contratada ________________________</p>
    `;

    document.getElementById('contrato').innerHTML = contratoHTML;
    document.getElementById('contrato').style.display = 'block';
    document.getElementById('imprimir').style.display = 'block';
    document.getElementById('baixarPDF').style.display = 'block';
}

document.getElementById('imprimir').addEventListener('click', function() {
    const contrato = document.getElementById('contrato').innerHTML;
    const janela = window.open('', '', 'width=800,height=600');
    janela.document.write('<html><head><title>Contrato</title></head><body>');
    janela.document.write(contrato);
    janela.document.write('</body></html>');
    janela.print();
});

document.getElementById('baixarPDF').addEventListener('click', function() {
    const contrato = document.getElementById('contrato').innerHTML;
    const pdf = new jsPDF();
    pdf.html(contrato, {
        callback: function(pdf) {
            pdf.save("contrato.pdf");
        }
    });
});
