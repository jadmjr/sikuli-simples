package configuracao;

import java.io.IOException;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Date;

import org.sikuli.script.FindFailed;
import org.sikuli.script.Key;
import org.sikuli.script.Pattern;
import org.sikuli.script.Region;
import org.sikuli.script.Screen;

public class Comando {
	private String IMAGE_PATH = "resources\\imagens\\";
	private Screen tela;
	private Pattern imageComponent;

	public Comando() {
		tela = new Screen();
	}

	public void enviarComando(String nomeDaImagem, String comando) {
		try {
			if (comando == "ESC") {
				imageComponent = new Pattern(IMAGE_PATH + nomeDaImagem + ".png");
				tela.type(imageComponent, Key.ESC);
			}
			if (comando == "APAGAR-CAMPO") {
				imageComponent = new Pattern(IMAGE_PATH + nomeDaImagem + ".png");
				tela.type(imageComponent, "a", Key.CTRL);
				tela.type(Key.BACKSPACE);
			}
			if (comando == "ENTER") {
				imageComponent = new Pattern(IMAGE_PATH + nomeDaImagem + ".png");
				tela.type(imageComponent, "a", Key.ENTER);
			}

		} catch (FindFailed e) {
			System.out.println(pegarData() + " - Não foi possível enviar um comando para o campo: " + nomeDaImagem);
		}
	}

	public void digitarNoCampo(String nomeDaImagem, String texto) {
		try {
			imageComponent = new Pattern(IMAGE_PATH + nomeDaImagem + ".png");
			tela.type(imageComponent, texto);
		} catch (FindFailed e) {
			System.out.println(pegarData() + " - Erro ao digitar no campo: " + nomeDaImagem);
		}
	}

	public void digitarEmRegiao(Pattern padrao, String texto) {
		try {
			imageComponent = padrao;
			tela.type(imageComponent, texto);
		} catch (FindFailed e) {
			System.out.println(pegarData() + " - função (digitarEmRegiao) falhou");
		}
	}

	public boolean buscarTexto(String texto) {
		try {
			tela.findText(texto);
			return true;
		} catch (FindFailed e) {
			return false;
		}
	}

	public void clicarNoTexto(String texto) {
		try {
			tela.click(tela.findText(texto));
		} catch (FindFailed e) {
			System.out.println(pegarData() + " - Erro ao buscar o texto: " + texto + " na tela");
		}
	}

	public void clicarDuploNoTexto(String texto) {
		try {
			tela.doubleClick(tela.findText(texto));
		} catch (FindFailed e) {
			System.out.println(pegarData() + " - Erro ao buscar o texto: " + texto + " na tela");
		}
	}

	public void cliqueSimples(String nomeDaImagem) {
		try {
			imageComponent = new Pattern(IMAGE_PATH + nomeDaImagem + ".png");
			tela.click(imageComponent);
		} catch (FindFailed e) {
			System.out.println(pegarData() + " - Erro ao clicar no campo: " + nomeDaImagem);
		}
	}

	public void cliqueDuplo(String nomeDaImagem) {
		try {
			imageComponent = new Pattern(IMAGE_PATH + nomeDaImagem + ".png");
			tela.doubleClick(imageComponent);
		} catch (FindFailed e) {
			System.out.println(pegarData() + " - Erro ao clicar no campo: " + nomeDaImagem);
		}
	}

	public boolean imagemExiste(String nomeDaImagem) {
		try {
			imageComponent = new Pattern(IMAGE_PATH + nomeDaImagem + ".png");
			tela.wait(imageComponent, 10);
			return true;
		} catch (FindFailed e) {
			System.out.println(pegarData() + " - O campo: " + nomeDaImagem + " não foi localizado");
		}
		return false;
	}

	public boolean imagemExisteComPrecisao(String nomeDaImagem, Float precisao) {
		try {
			imageComponent = new Pattern(IMAGE_PATH + nomeDaImagem + ".png");
			tela.wait(imageComponent.similar(precisao), 0);
			return true;
		} catch (FindFailed e) {
			System.out.println(pegarData() + " - O campo: " + nomeDaImagem + " não foi localizado");
		}
		return false;
	}

	public void esperaImagemAparecer(String nomeDaImagem, int tempo) {
		try {
			imageComponent = new Pattern(IMAGE_PATH + nomeDaImagem + ".png");
			tela.wait(imageComponent, tempo);
		} catch (FindFailed e) {
			System.out.println(pegarData() + " - O campo: " + nomeDaImagem + " não foi localizado");
		}
	}

	public Pattern posicaoImagem(String nomeDaImagem) {
		imageComponent = new Pattern(IMAGE_PATH + nomeDaImagem + ".png");
		return imageComponent;
	}

	private String pegarData() {
		DateFormat dateFormat = new SimpleDateFormat("dd/MM/yyyy HH:mm:ss");
		Date date = new Date();
		return dateFormat.format(date);
	}

	public void cliqueEmRegiaoXY(int x, int y) {
		Region regiao = new Region(x, y);
		regiao.click();
	}

	public void duploCliqueEmRegiaoXY(int x, int y) {
		Region regiao = new Region(x, y);
		regiao.doubleClick();
	}

	public void digitarEmRegiao(int x, int y, String texto) {
		Region regiao = new Region(x, y);
		regiao.type(texto);
	}

	public boolean validaConexaoTelnet(String ip) {
		ProcessBuilder processBuilder = new ProcessBuilder();

		processBuilder.command("cmd.exe", "/c", "telnet " + ip);

		try {
			Process process = processBuilder.start();

			int exitCode = process.waitFor();
			if (exitCode != -1) {
				return true;
			}

		} catch (IOException e) {
			e.printStackTrace();
		} catch (InterruptedException e) {
			e.printStackTrace();
		}
		return false;

	}

	public boolean validaConexaoInternet() {
		ProcessBuilder processBuilder = new ProcessBuilder();

		processBuilder.command("cmd.exe", "/c", "ping -n 3 google.com");

		try {
			Process process = processBuilder.start();

			int exitCode = process.waitFor();
			if (exitCode != -1) {
				return true;
			}

		} catch (IOException e) {
			e.printStackTrace();
		} catch (InterruptedException e) {
			e.printStackTrace();
		}
		return false;

	}

	public void executaComandoWindows(String comando) {
		ProcessBuilder processBuilder = new ProcessBuilder();

		processBuilder.command("cmd.exe", "/c", comando);

		try {
			processBuilder.start();
		} catch (IOException e) {
			e.printStackTrace();
		}

	}

	public void terminarTeste() {

	}

}
