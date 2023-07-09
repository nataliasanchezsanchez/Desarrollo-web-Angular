import { Component,ComponentFactoryResolver, OnInit } from '@angular/core';
import { VoiceRecognitionService } from './services/voice-recognition.service';
import { SpeechSynthesisService } from './services/speech-synthesis.service';
import { NlpAgentService } from './services/nlp-agent.service';
import { faMicrophone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:  [VoiceRecognitionService, SpeechSynthesisService],
  
})
export class AppComponent implements OnInit{
  title = 'bot_app_zoo';
  faMicro = faMicrophone;
  showingWelcome = true;/** componente de bienvenida de acceso a la app*/
  lastRecognition = '';/** variable de reconocimiento de voz inicialmente vacia*/

  constructor(
    public voiceRecognitionService: VoiceRecognitionService,
    private nlpAgentService: NlpAgentService,
    public speechSynthesisService: SpeechSynthesisService,

  ){
  this.voiceRecognitionService.init();
    nlpAgentService.createUUID();
  }

  ngOnInit() {
    this.voiceRecognitionService.setIsStoppedSpeechRecog(true);
  } 
 /** funcion que inicializa el funcionamiento tras ativar el click y comunica al chatbot el HOLA inicial*/
  async accessApp(){
    this.showingWelcome = false;
    await this.processInput("Hola");
    this.voiceRecognitionService.setIsStoppedSpeechRecog(false);
    this.voiceRecognitionService.lastTextObservable.subscribe(recognition => {
      this.processInput(recognition);
    });
  }
 /** funcion que invoca al servicio de reconocimiento de voz con funcion start*/
  startVoiceRecognition(){
    this.voiceRecognitionService.start()
  }
 /** funcion que invoca al servicio de reconocimiento de voz con funcion stop*/
  stopVoiceRecognition(){
    this.voiceRecognitionService.stop()
  }
 /** funcion que invoca al servicio de sintesis de voz con funcion speak*/
  async speak(message: any){
    await this.speechSynthesisService.speak(message);
  }

  async processInput(recognition: any){
    this.lastRecognition = recognition;
    const agentResponse: any = await this.nlpAgentService.sendToBot(this.lastRecognition);

    console.log('agentResponse',agentResponse);

    for (const agentMsg of agentResponse){
    console.log('agentMsg',agentMsg);
    if ('text' in agentMsg) {
      console.log('agentMsg',agentMsg.text);
      await this.speak(agentMsg.text);
    }
    }

    console.log('rearranco recogni');
    this.startVoiceRecognition();
  }
}
