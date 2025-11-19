import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import ChampionSelector from "./ChampionSelector";

const MatchupsComponent = () => {
  //Esse array deve vir da API
  const champions = [
    {
      value: "Aatrox",
      label: "Aatrox",
    },
    {
      value: "Camille",
      label: "Camille",
    },
    {
      value: "Diana",
      label: "Diana",
    },
    {
      value: "Ekko",
      label: "Ekko",
    },
    {
      value: "Fiora",
      label: "Fiora",
    },
  ];

  const [champion1, setChampion1] = React.useState("");
  const [champion2, setChampion2] = React.useState("");

  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle>Champion Matchup</CardTitle>
          <CardDescription>
            Compare as matchups dos campeões baseadas no mestre grão mestre e
            challenger do high elo brasileiro
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col items-center gap-6">
            {/* Linha dos seletores */}
            <div className="flex items-center justify-center gap-8">
              <div className="flex flex-col items-center">
                <ChampionSelector
                  champions={champions}
                  value={champion1}
                  onValueChange={setChampion1}
                />
              </div>
              <div className="flex flex-col items-center">
                <ChampionSelector
                  champions={champions}
                  value={champion2}
                  onValueChange={setChampion2}
                />
              </div>
            </div>

            {/* Linha dos nomes dos campeões e VS */}
            <div className="flex items-center justify-center w-full">
              <div className="mr-12 flex-1 flex justify-end items-center">
                champion 1
              </div>
              <div className="mx-16 shrink-0">VS</div>
              <div className="ml-12 flex-1 flex justify-start items-center">
                champion 2
              </div>
            </div>

            {/* Linha dos Win rates e quantidade de partidas */}
            <div className="flex items-center justify-center w-full">
              <div className="mr-12 flex-1 flex justify-end items-center">
                <div>Matchup Win rate1</div>
              </div>
              <div className="mx-16 shrink-0">
                <div>Quantidade de partidas</div>
              </div>
              <div className="ml-12 flex-1 flex justify-start items-center">
                <div>Matchup Win rate2</div>
              </div>
            </div>

            {/* Barra de winrate - alinhada do canto esquerdo de champion 1 até o canto direito de champion 2 */}
            <div className="flex items-center justify-center w-full gap-8">
              <div className="w-[200px] shrink-0" />
              <div className="flex-1 min-w-0">
                <div className="w-full h-4 bg-gray-200 rounded-full overflow-hidden">
                  {/* Componente em barra para visualização da winrate */}
                  <div className="h-full bg-gradient-to-r from-blue-500 to-purple-500" />
                </div>
              </div>
              <div className="w-[200px] shrink-0" />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default MatchupsComponent;
