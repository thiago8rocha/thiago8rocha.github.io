import type { Project } from '../types';

export const projects: Project[] = [
  {
    slug: 'playwright-automation-architecture',
    title: 'Playwright: automação, arquitetura e CI/CD',
    group: 'professional',
    badge: 'Profissional',
    company: 'CarBigData',
    summary: 'Automação de testes, CI e relatórios de qualidade construídos do zero para uma plataforma de dados automotivos e prevenção a fraudes, com IA no dia a dia de testes.',
    testTypes: ['E2E', 'API', 'BFF', 'UI', 'Regressão', 'Smoke'],
    tools: ['Playwright', 'Playwright BDD', 'TypeScript', 'Jenkins', 'Claude Code', 'Playwright MCP'],
    caseStudy: {
      lead: 'Um framework em camadas com Playwright cobrindo testes E2E, API, BFF e UI, integrado ao fluxo de deploy dos times de desenvolvimento, acompanhado de um dashboard de resultados com report semanal e construído com IA no dia a dia.',
      meta: [
        { label: 'Empresa', value: 'CarBigData' },
        { label: 'Cargo', value: 'Analista de QA Sênior' },
        { label: 'Período', value: 'abr 2026 – atual' },
        { label: 'Domínio', value: 'Inteligência de dados automotivos · Prevenção a fraudes' },
      ],
      overview: [
        'A CarBigData é líder nacional em inteligência de dados automotivos. Sua plataforma coleta e analisa dados e imagens de veículos por meio de um pipeline próprio, apoiando a prevenção a fraudes e a recuperação de ativos.',
        'Fui contratado para construir a automação de testes. O que existia era uma suíte em Cypress em estágio inicial, sem nenhum padrão de orientação a objetos. Antes de escrever qualquer teste, mapeei o produto atual e fiz uma análise comparativa de frameworks com base nele. O Playwright se mostrou a melhor opção, e a partir dele desenhei a arquitetura do zero.',
      ],
      stats: [
        { value: '~800', label: 'testes automatizados entre E2E, API, BFF e UI' },
        { value: '300+', label: 'builds executados na pipeline' },
        { value: '4', label: 'camadas de teste: E2E, API, BFF, UI' },
        { value: '2', label: 'gatilhos automáticos: regressivo na release, smoke no hotfix' },
      ],
      howItWorks: [
        {
          steps: [
            'Um time de desenvolvimento sobe uma branch de release ou de hotfix.',
            'O trigger no Jenkins inicia a pipeline: regressivo completo para branches de release, smoke test para branches de hotfix.',
            'O Playwright executa a suíte nas camadas E2E, API, BFF e UI.',
            'O resultado é publicado no Google Chat.',
            'Um dashboard compila todas as execuções, mantém o mapa de cobertura com os cenários de cada funcionalidade, API e BFF, e gera um report semanal enviado por e-mail ao time de desenvolvimento.',
          ],
        },
      ],
      aiWorkflow: {
        title: 'IA no fluxo de testes',
        text: 'O Claude faz parte do trabalho diário, não é um experimento à parte. Uso o Claude Code conectado ao Playwright MCP, que permite a ele controlar um navegador real na aplicação enquanto os testes são escritos e mantidos. O Claude também apoia a análise de logs e a documentação, e o dashboard de resultados roda no ambiente corporativo do Claude. Toda saída da IA passa por revisão antes de entrar na suíte.',
      },
      role: {
        items: [
          'Avaliei o que existia em Cypress e o produto, e escolhi o Playwright a partir de uma análise comparativa',
          'Desenhei a arquitetura com Playwright BDD e o padrão Feature Actions',
          'Implementei testes E2E (funcionalidades e navegação), de API, BFF e UI',
          'Construí do zero a pipeline e o trigger no Jenkins, com shared libraries, e integrei ao fluxo de deploy dos times de desenvolvimento',
          'Construí o dashboard de resultados, o report semanal e o mapa de cobertura',
          'Trouxe o Claude Code com o Playwright MCP para o dia a dia de escrita e manutenção de testes',
        ],
      },
      stack: ['Playwright', 'Playwright BDD', 'TypeScript', 'Jenkins', 'Google Chat', 'Claude', 'Claude Code', 'Playwright MCP'],
      testingNote: 'Planejado: Performance.',
      architecture: {
        layers: [
          { name: 'Feature files', detail: 'cenários BDD legíveis pelo negócio' },
          { name: 'Feature Actions', detail: 'uma ação reutilizável por passo de negócio' },
          { name: 'Camadas de teste', detail: 'E2E · API · BFF · UI' },
          { name: 'Utilitários centrais', detail: 'helpers, dados e configuração compartilhados' },
        ],
        note: 'cenários chamam ações, ações dirigem as camadas, camadas compartilham o núcleo',
      },
      challenges: [
        {
          title: 'Escolher a base',
          challenge: 'Já existia uma suíte inicial em Cypress, mas sem nenhum padrão. Construir em cima dela significava herdar isso.',
          approach: 'Mapeei o produto atual e comparei frameworks com base nele antes de escrever qualquer teste. Escolhi o Playwright e defini Playwright BDD com Feature Actions como padrão.',
          outcome: 'Uma única arquitetura hoje sustenta cerca de 800 testes em quatro camadas.',
        },
        {
          title: 'Testes fora do fluxo de entrega',
          challenge: 'Automação que só roda quando alguém lembra de rodar não protege uma release.',
          approach: 'Construí um trigger no Jenkins ligado às branches dos times de desenvolvimento: regressivo em toda branch de release, smoke em toda branch de hotfix.',
          outcome: 'Toda release e todo hotfix são testados automaticamente, com mais de 300 builds executados até agora.',
        },
        {
          title: 'Resultados que mostram onde o produto está',
          challenge: 'Resultados espalhados em builds isolados não mostram cobertura nem tendência.',
          approach: 'Construí um dashboard que compila todas as execuções, mapeia a cobertura por funcionalidade, API e BFF, e gera um report semanal enviado por e-mail ao time de desenvolvimento.',
          outcome: 'O time recebe toda semana uma visão dos resultados e consegue ver quais cenários cobrem cada funcionalidade, API e BFF.',
        },
      ],
      achievements: [
        'Substituí um início desestruturado em Cypress por uma arquitetura com Playwright desenhada do zero',
        'Cerca de 800 testes automatizados entre E2E, API, BFF e UI',
        'Regressivo e smoke disparados automaticamente por branches de release e hotfix, com mais de 300 builds até agora',
        'Dashboard de resultados com mapa de cobertura e report semanal para o time de desenvolvimento',
        'Claude Code com o Playwright MCP como parte do fluxo diário de testes',
        'Testes de performance planejados como próxima camada',
      ],
    },
  },
  {
    slug: 'mygarage-bmw',
    title: 'MyGarage, BMW US/CA',
    group: 'professional',
    badge: 'Profissional',
    company: 'Zallpy · Projeto BMW US',
    summary: 'Padrões de processo de testes, regressão e acessibilidade para os apps MyGarage da BMW, MINI, Toyota e Rolls-Royce nos EUA e no Canadá.',
    testTypes: ['Regressão', 'Funcional', 'Acessibilidade (ADA / WCAG 2.1)', 'Gestão de testes'],
    tools: ['Xray', 'Axe Expert', 'Lighthouse', 'ADA / WCAG 2.1'],
    caseStudy: {
      lead: 'Reestruturei a forma como o QA escrevia, organizava, revisava e executava testes nos apps web e mobile do MyGarage, e transformei as verificações de acessibilidade de prints soltos em uma prática agendada e documentada.',
      meta: [
        { label: 'Empresa', value: 'Zallpy, Projeto BMW US' },
        { label: 'Cargo', value: 'Analista de QA Sênior' },
        { label: 'Período', value: 'set 2022 – abr 2026' },
        { label: 'Domínio', value: 'Automotivo · Web e mobile' },
        { label: 'Marcas', value: 'BMW e MINI (EUA, CA) · Toyota (EUA, CA) · Rolls-Royce (EUA)' },
      ],
      overview: [
        'O MyGarage é o conjunto de apps web e mobile para proprietários de BMW, MINI, Toyota e Rolls-Royce nos Estados Unidos e no Canadá, distribuídos em sete combinações de marca e mercado.',
        'Quando cheguei, não havia padrão para escrita de scripts, coleta de evidências ou execução de regressivos. A base no Xray passava de 5.000 scripts, os regressivos eram feitos pelos POs sem regularidade, funcionalidades novas saíam sem scripts e os resultados de acessibilidade ficavam em prints soltos do Axe Expert e do Lighthouse. Junto com outra QA do time, reestruturamos o processo de ponta a ponta.',
      ],
      stats: [
        { value: '5.000+ → ~1.000', label: 'scripts de teste, após remover redundantes e sem uso' },
        { value: '7', label: 'combinações de marca e mercado cobertas' },
        { value: 'Mensal', label: 'regressivos no mínimo, antes esporádicos' },
        { value: 'Trimestral', label: 'execução completa de acessibilidade em todas as marcas' },
      ],
      howItWorks: [
        {
          title: 'Ciclo de testes',
          steps: [
            'Uma funcionalidade nova é entregue junto com seus scripts de teste.',
            'Pelo menos um outro QA revisa e aprova os scripts.',
            'Os scripts ficam no Xray, organizados por marca e, dentro de cada marca, por funcionalidade.',
            'O time de QA executa regressivos de release e de hotfix, no mínimo uma vez por mês, com cada execução registrada no Xray.',
            'Os defeitos seguem um fluxo definido, com informações mínimas obrigatórias e labels para rastreabilidade.',
          ],
        },
        {
          title: 'Ciclo de acessibilidade',
          steps: [
            'Cada entrega de sprint vai acompanhada de um report de ADA compacto.',
            'A cada três meses, uma execução completa cobre todas as marcas para identificar defeitos novos.',
            'Um report consolidado reúne todos os resultados e compara cada execução com as anteriores.',
          ],
        },
      ],
      role: {
        intro: 'Como QA líder, junto com outra QA do time:',
        items: [
          'Defini o padrão de escrita de scripts de teste',
          'Reestruturei o repositório do Xray por marca e, dentro de cada marca, por funcionalidade',
          'Reduzi a base de mais de 5.000 para cerca de 1.000 scripts, removendo redundâncias e scripts que não agregavam',
          'Transferi os regressivos dos POs para o time de QA, tanto de release quanto de hotfix',
          'Tornei os scripts de teste parte de toda entrega de funcionalidade, com revisão de pelo menos um QA',
          'Defini o fluxo de criação de defeitos, com labels para rastreabilidade e informações mínimas obrigatórias',
          'Organizei a prática de acessibilidade: execuções trimestrais, reports consolidados e reports de ADA por sprint',
        ],
      },
      stack: ['Xray', 'Axe Expert', 'Lighthouse'],
      challenges: [
        {
          title: 'Uma base de testes grande demais para ser confiável',
          challenge: 'Mais de 5.000 scripts escritos sem padrão comum, muitos redundantes ou que já não faziam sentido.',
          approach: 'Definimos um padrão de scripts, reorganizamos o Xray por marca e por funcionalidade e mantivemos só os scripts relevantes e de fato usados nos testes.',
          outcome: 'Uma base com cerca de 1.000 scripts que reflete o que o time realmente testa.',
        },
        {
          title: 'Regressivos sem ritmo nem histórico',
          challenge: 'Os regressivos eram feitos pelos POs, de forma esporádica, e não deixavam histórico de execução.',
          approach: 'Passamos os regressivos para o time de QA, tanto de release quanto de hotfix, executados e registrados no Xray.',
          outcome: 'Regressivos no mínimo uma vez por mês, com histórico de todas as execuções.',
        },
        {
          title: 'Scripts como algo opcional',
          challenge: 'Funcionalidades novas saíam sem scripts. Eles só eram criados se o QA tivesse interesse.',
          approach: 'Tornamos os scripts parte da entrega da funcionalidade, aprovados só após revisão de pelo menos um QA, e definimos um fluxo de defeitos com labels e informações mínimas obrigatórias.',
          outcome: 'A cobertura cresce a cada funcionalidade, e todo script e todo defeito seguem o mesmo padrão.',
        },
        {
          title: 'Resultados de acessibilidade que não podiam ser comparados',
          challenge: 'As verificações de acessibilidade aconteciam de forma esporádica, nem sempre após cada entrega, e os resultados ficavam em prints soltos.',
          approach: 'Agendamos uma execução completa em todas as marcas a cada três meses, criamos um report consolidado comparando as execuções e adicionamos um report de ADA compacto a cada entrega de sprint.',
          outcome: 'Defeitos novos de acessibilidade são encontrados em uma rotina definida e comparados execução a execução.',
        },
      ],
      achievements: [
        'Reduzi a base do Xray de mais de 5.000 para cerca de 1.000 scripts relevantes, organizados por marca e funcionalidade',
        'Passei os regressivos dos POs para o QA, rodando no mínimo mensalmente para releases e hotfixes, com histórico completo de execuções',
        'Tornei os scripts de teste parte de toda entrega de funcionalidade, com revisão obrigatória de um QA',
        'Padronizei a criação de defeitos com labels e informações mínimas obrigatórias',
        'Transformei a acessibilidade de prints esporádicos em execuções trimestrais em todas as marcas, reports comparativos e reports de ADA por sprint',
      ],
    },
  },
  {
    slug: 'wake-experience-automation',
    title: 'Robot Framework: automação e arquitetura',
    group: 'professional',
    badge: 'Profissional',
    company: 'Wake Experience',
    summary: 'Uma única arquitetura de automação, adotada por todas as squads de uma plataforma de e-commerce que atende milhares de lojas online.',
    testTypes: ['Frontend', 'API', 'BFF'],
    tools: ['Robot Framework', 'Feature Actions', 'Jenkins'],
    caseStudy: {
      lead: 'Peguei uma automação em que cada QA trabalhava isolado e transformei em uma única arquitetura com Robot Framework, baseada no padrão Feature Actions e adotada pelas quatro squads.',
      meta: [
        { label: 'Empresa', value: 'Wake Experience' },
        { label: 'Cargo', value: 'Analista de Qualidade II' },
        { label: 'Período', value: 'abr 2022 – set 2022' },
        { label: 'Domínio', value: 'Plataforma de e-commerce' },
        { label: 'Time', value: '4 squads · 5 QAs' },
      ],
      overview: [
        'A Wake Experience é uma plataforma de e-commerce usada por milhares de lojistas online.',
        'Quando cheguei, já existia automação com Robot Framework, mas não havia uma arquitetura definida para a empresa, nem integração entre os QAs das squads, nem uso de orientação a objetos no código. Tomei a frente na definição de uma arquitetura única, usando Feature Actions como padrão de orientação a objetos, e na organização de como as squads trabalhariam juntas sobre ela. Todos os times adotaram a arquitetura como padrão. O foco principal eram testes de frontend, API e BFF.',
      ],
      stats: [
        { value: '4', label: 'squads na mesma arquitetura' },
        { value: '5', label: 'QAs trabalhando com um único padrão' },
        { value: '3', label: 'camadas de teste: frontend, API, BFF' },
        { value: '1', label: 'arquitetura compartilhada, no lugar de abordagens por time' },
      ],
      howItWorks: [
        {
          steps: [
            'Os passos de negócio são implementados uma vez, como Feature Actions, e reutilizados nos testes.',
            'Cada squad cobre suas funcionalidades usando a mesma estrutura e as mesmas convenções.',
            'As suítes cobrem as camadas de frontend, API e BFF.',
            'Uma pipeline no Jenkins, definida em um Jenkinsfile dentro do repositório do projeto, executa as suítes.',
          ],
        },
      ],
      role: {
        items: [
          'Defini a arquitetura de automação da empresa, com Feature Actions como padrão de orientação a objetos',
          'Estruturei a forma como os QAs das squads trabalhariam juntos sobre ela, até as quatro squads adotarem como padrão',
          'Automatizei testes de frontend, API e BFF',
          'Construí a pipeline no Jenkins como um Jenkinsfile no repositório do projeto',
        ],
      },
      stack: ['Robot Framework', 'Feature Actions', 'Jenkins'],
      challenges: [
        {
          title: 'Uma ferramenta, várias formas de usar',
          challenge: 'O QA de cada squad automatizava de forma isolada, sem arquitetura comum e sem orientação a objetos.',
          approach: 'Defini uma arquitetura única com Feature Actions como padrão e organizei como as squads trabalhariam juntas sobre ela.',
          outcome: 'As quatro squads e os cinco QAs passaram a usar a mesma arquitetura.',
        },
        {
          title: 'Uma pipeline sem shared libraries',
          challenge: 'A empresa não usava shared libraries no Jenkins, então não havia uma pipeline comum para reaproveitar.',
          approach: 'Escrevi a pipeline como um Jenkinsfile dentro do repositório do projeto.',
          outcome: 'A pipeline foi construída e entregue. A execução dependia do time de infraestrutura liberar o acesso ao Jenkins, o que ainda estava pendente quando saí.',
        },
      ],
      achievements: [
        'Defini a primeira arquitetura de automação compartilhada da empresa, com Robot Framework e Feature Actions',
        'Levei quatro squads e cinco QAs para o mesmo padrão',
        'Cobri as camadas de frontend, API e BFF',
        'Entreguei uma pipeline no Jenkins pronta para rodar a partir do repositório do projeto',
      ],
    },
  },
  {
    slug: 'bookshelf-playwright',
    title: 'Bookshelf, Playwright + TypeScript',
    group: 'opensource',
    badge: 'Open Source',
    subtitle: 'Projeto pessoal, público no GitHub',
    summary: '237 testes end-to-end em 3 browsers, regressão visual, acessibilidade com axe-core e pipeline de CI/CD que publica um relatório Allure.',
    testTypes: ['E2E', 'Visual', 'Acessibilidade'],
    tools: ['Playwright', 'TypeScript', 'axe-core', 'Allure', 'GitHub Actions'],
    links: [{ label: 'Repositório', href: 'https://github.com/thiago8rocha/bookshelf-playwright-tests' }],
    caseStudy: {
      meta: [
        { label: 'Projeto', value: 'Projeto pessoal, público no GitHub' },
        { label: 'Domínio', value: 'Open source · E2E e acessibilidade' },
      ],
      overview: [],
      role: { intro: 'Autor do framework, dos testes e do pipeline.', items: [] },
    },
  },
  {
    slug: 'bookshelf-robot-k6',
    title: 'Bookshelf, Robot Framework + K6',
    group: 'opensource',
    badge: 'Open Source',
    subtitle: 'Projeto pessoal, público no GitHub',
    summary: 'Suíte de automação fullstack com API REST, UI E2E, WCAG 2.1 e performance (load, spike, soak e stress), com CI/CD no GitHub Actions.',
    testTypes: ['API', 'E2E', 'Acessibilidade', 'Performance'],
    tools: ['Robot Framework', 'K6', 'GitHub Actions'],
    links: [{ label: 'Repositório', href: 'https://github.com/thiago8rocha/bookshelf-robotframework-tests' }],
    caseStudy: {
      meta: [
        { label: 'Projeto', value: 'Projeto pessoal, público no GitHub' },
        { label: 'Domínio', value: 'Open source · API, UI e performance' },
      ],
      overview: [],
      role: { intro: 'Autor das suítes, dos cenários de performance e do pipeline.', items: [] },
    },
  },
];
