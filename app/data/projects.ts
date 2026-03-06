// app/data/projects.ts

export type ArticleSection = {
  heading?: string;
  content: string;
  image?: string; // 画像のパス（任意）
};

export type Project = {
  id: string;
  title: string;
  catchphrase: string;
  imgUrl: string;
  tags: string[];
  
  // ▼ これまでの細々したデータをブログ形式の配列にまとめる
  article: ArticleSection[];
  
  // ▼ 以下はカード表示やメタデータとして残しておきます
  techStack: {
    frontend: string[];
    backend: string[];
    infra: string[];
    ai?: string[];
  };
  demoUrl?: string;
  githubUrl?: string;
};

export const projects: Project[] = [
  {
    id: "yoru-takibi",
    title: "夜焚き火",
    catchphrase: "夜だけ灯る、静かな日記共有サービス",
    imgUrl: "/images/yotakibi/yotakibi.jpg", // 提供されたOGP画像などを指定
    tags: ["Python", "Flask",],
    techStack: {
      frontend: ["HTML/CSS", "Jinja2"],
      backend: ["Python", "Flask",],
      infra: ["Render", "GitHub Actions"],
    },
    // ▼ ブログ風の詳細コンテンツ
    article: [
      {
        content: "「夜焚き火」は、毎日19:00〜翌01:00の間だけオープンする、完全匿名の日記共有サイトです。「いいね」やリプライといったSNSの機能から離れ、ただ自分の言葉（薪）を焚べ、誰かの言葉の火にあたるだけの静寂な空間を目指しました。"
      },
      {
        heading: "あえて不便な「営業時間」と「種火」の仕組み",
        content: "いつでもどこでも繋がれる現代へのアンチテーゼとして、アクセス時間を夜に限定する門番機能（system.py）を実装しました。また、投稿時にはアカウント登録を求めず、代わりに「種火（合言葉）」を設定してもらいます。これにより、自分だけが過去の火を検索して振り返ることができる、ゆるやかな繋がりを実現しています。"
      },
      {
        heading: "IPハッシュとNGワードによる「荒れない」治安維持",
        content: "匿名性を担保しつつ治安を守るため、アクセス元のIPアドレスにソルトを加えてハッシュ化し（utils.py）、1時間に5回までの連投制限を設けています。また、世界観を壊すような犯罪予告や特定のなりすまし（管理人など）を防ぐため、最小限のNGワードチェック（ng_words.py）を裏側で走らせています。"
      },
      {
        heading: "世界観に溶け込むステルスな管理者UI",
        content: "管理画面の存在自体がサイトの雰囲気を壊さないよう工夫しました。URLのパラメータで役（ロール）を切り替え、画面左上の隠しホットスポットをクリックした時だけ、監視用のバッジやピン留め機能付きのサイドバー（admin_sidebar.html）が浮かび上がるようになっています。"
      },
      {
        heading: "AIが彩る「火の番」",
        content: "誰もいなくて焚き火が寂しくならないよう、Gemini APIを利用した「AI Bot（火の番）」を裏側に仕込んでいます（bot.py）。GitHub Actions（auto_fire.yml）を使って定期的に起動し、20〜80文字程度の素朴で日常的な独り言を生成して自動で薪をくべてくれます。"
      },
      {
        heading: "振り返り",
        content: "「宣伝すると秘密の場所という世界観が壊れる」というジレンマに直面し、集客面では課題が残りました。しかし、Flaskを採用して、AIのサポートを得ながら初めて形にできたWebサイトであり、思い入れの深い作品です。"
      }
    ]
  },
  // ... 他のプロジェクトも同様に article を追加していく
  {
    id: "ai-gekiomo",
    title: "AI激重彼女",
    catchphrase: "愛が重すぎるAIとの、爆笑恋愛シミュレーション",
    imgUrl: "/images/gekiomo/banner1.png", // スクリーンショット等を配置してください
    tags: ["Next.js", "Supabase", "Gemini API",],
    techStack: {
      frontend: ["Next.js (App Router)", "Framer Motion", "Tailwind CSS"],
      backend: ["Google Gemini API", "Supabase"],
      infra: ["Vercel", "Upstash Redis (Rate Limiting)"],
      ai: ["Gemini 2.5 Flash", "Prompt Engineering"]
    },
    demoUrl: "https://ai-gekiomo-girlfriend.vercel.app/",
    article: [
      {
        content: "「AI激重彼女」は、ユーザーが何気ない言葉を投げかけると、常軌を逸した愛と束縛で返してくるジョークチャットボットです。「既読無視」や「GPS」といった恋愛の火種になりそうなワードに対し、AIが瞬時に“重い”返信を生成します。"
      },
      {
        heading: "「辞書」と「生成AI」のハイブリッド構成",
        content: "レスポンス速度と「ネタの質」を両立させるため、2段構えの構成を採用しました。「別れよう」「飲み会」などの定番ワードには、あらかじめ用意した最高強度の定型文（辞書）が即座にヒットし、それ以外の入力にはGoogle Gemini-3.1-flash-lite-previewが動的に返信を生成します。これにより、APIコストを抑えつつ、ユーザーを飽きさせない体験を実現しました。"
      },
      {
        heading: "動的なOGPによるバズ狙い",
        image: "/images/gekiomo/ogp1.png",
        content: "ただチャットするだけでなく、SNSでの拡散（バズ）を強く意識した設計を行いました。SNSに投稿をシェアする際のOGP画像を、固定せず動的に生成します。"
      },
      {
        heading: "激重な世界観を支えるUI/UX",
        content: "「病みかわいい」をテーマに、紫とピンクを基調としたデザインに統一しました。送信ボタンを押すと「既読がつきました...」と表示されたり、背景でハートが脈打つアニメーションを入れたりと、Framer Motionを使って不安と愛着を煽るマイクロインタラクションを実装しています。"
      },
      {
        heading: "個人開発としての守り（レートリミット）",
        content: "APIの過剰利用やDDoS攻撃を防ぐため、Upstash RedisとRatelimitライブラリを導入し、IPアドレスごとの連投制限を設けています。また、万が一APIがダウンした際や制限にかかった場合でも、アプリが落ちずに「逃げないから待っててね♡」という専用のメッセージと共にハンドリングするフォールバック処理を実装し、UXを損なわないよう配慮しました。"
      },
      {
        heading: "振り返り",
        content: "「AIにどういう役割を演じさせるか」というプロンプトの調整だけでなく、「その出力をどう見せれば人がシェアしたくなるか」という共有体験のデザインに注力した作品です。Xで広報に力を入れましたが、振るわず。エンタメアプリって難しいですね。初めてNext.jsにチャレンジしたアプリであり、Supabseとの連携、Vercelでのデプロイ、広報の難しさ、さまざまな学びを得た大事な作品です。まだ遊べるのでよかったら上のLive Demoボタンからぜひ。"
      }
    ]
  },
];