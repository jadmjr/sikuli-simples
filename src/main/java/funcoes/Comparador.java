package funcoes;

import configuracao.Comando;

public class Comparador {

	public static void main(String[] args) {
		Comando comando = new Comando();

		while(true) {
			System.out.println("APARECEU->" + comando.imagemExisteComPrecisao("btn-salvar", (float) 0.9));
		
			
		}

	}

}
