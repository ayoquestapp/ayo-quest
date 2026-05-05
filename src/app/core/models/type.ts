export interface User {
  user_metadata: any;
  id: string;
  email: string;
  full_name?: string;
  role?: string;
}

export interface Course {
  title: string,
  description: string,
  image: string,
  tag: string,
  label: string,
  modules: number,
  tempoEstimado: string,
  xp: number,
  streak: number,
  progresso: number,
}

export interface StatusCard {
  icon: string,
  value: number | string,
  label: string,
  variant: string,

}

export interface Module {
  id: number;
  title: string;
  description: string;
  tags: string[];
  duration: string;
  lessons: number;
  xp: number;
  status: 'completed' | 'in-progress' | 'pending';
}

export interface ModuloPayload {
  nome: string;
  descricao: string;
  conteudos: Conteudo[];
  questoes: Questao[];
}

export enum TipoConteudo {
  VIDEO = 'VIDEO',
  TEXTO = 'TEXTO'
}

export interface Conteudo {
  titulo: string;
  tipo: TipoConteudo;
  valor: string;
}

export interface Questao {
  tipo: string;
  enunciado: string;
  xp: number;
  alternativas?: Alternativa[];
}

export interface Alternativa {
  texto: string;
  correta: boolean;
}

export interface AccountMenu {
  userName: string;
  email: string;
  level: number;
  xp: number;
  maxXp: number;
}

export interface Conquista {
  titulo: string;
  descricao: string;
  icone: string;
  desbloqueada: boolean;
}

export interface FavoriteItem {
  id: number;
  titulo: string;
  descricao: string;
  tipo: 'Trilha' | 'Módulo';
  progresso: number;
  tempo: string;
  xp: number;
  tag: string;
  icone: string;
  corBanner: string;
}

export interface Notificacao {
  id: number;
  titulo: string;
  descricao: string;
  icone: string;

  lida?: boolean;
  data?: string;
  tipo?: 'info' | 'sucesso' | 'alerta';
}

export interface ConfigOption {
  id: number;
  titulo: string;
  descricao: string;
  ativo: boolean;
  icone?: string;
}

export interface Trilha {
  name: string;
  code: string;
}

export type QuestionType =
  | 'multiple'
  | 'checkbox'
  | 'boolean'
  | 'short';

export interface Question {
  id: string;
  type: QuestionType;
  statement: string;
  options?: string[];
  required: boolean;
  xp: number;
}

export interface QuizConfig {
  minScore: number;
  totalQuestions: number;
}

export interface Quiz {
  config: QuizConfig;
  questions: Question[];
}

export type tipoQuestaoId = 'MULTIPLA_ESCOLHA' | 'CAIXAS_SELECAO' | 'VERDADEIRO_FALSO' | 'QUESTAO_ABERTA';

export interface Alternativa {
  texto: string;
  isCorreta: boolean;
}
export interface Question {
  id: string;
  tipo: tipoQuestaoId;
  enunciado: string;
  xp: number;

  alternativas?: Alternativa[];
  correta?: number | boolean | string;
  gabarito?: string;
}

export interface QuestionTypeConfig {
  id: tipoQuestaoId;
  label: string;
  description: string;
  icon: string;
  color?: string;
}