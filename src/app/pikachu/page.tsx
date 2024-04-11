import Layout from "@/components/custom/layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function Pikachu() {
  return (
    <Layout>
      <div className="container mx-auto py-10">
        <div className="flex flex-col lg:flex-row items-center lg:justify-center space-y-6 lg:space-y-0 lg:space-x-6">
          <div className="w-full lg:w-1/2">
            <Card>
              <CardContent>
                <img
                  src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png"
                  alt="Pikachu"
                  className="rounded-lg mb-4"
                />
              </CardContent>
            </Card>
          </div>
          <div className="w-full lg:w-1/2">
            <Card>
              <CardContent>
                <CardHeader>
                  <CardTitle className="text-2xl font-semibold mb-2">Description</CardTitle>
                </CardHeader>
                <CardDescription>
                  Pikachu is an Electric-type Pokémon. It evolves from Pichu when leveled up with high friendship and evolves into Raichu when exposed to a Thunder Stone.
                </CardDescription>
                <CardHeader>
                  <CardTitle className="text-2xl font-semibold mb-2">Base Stats</CardTitle>
                </CardHeader>
                <CardDescription>
                  <ul className="list-disc list-inside">
                    <li>HP: 35</li>
                    <li>Attack: 55</li>
                    <li>Defense: 40</li>
                    <li>Special Attack: 50</li>
                    <li>Special Defense: 50</li>
                    <li>Speed: 90</li>
                  </ul>
                  <p className="text-sm text-gray-500">
                    Base stats provided are for Pikachu's first appearance in Pokémon Red and Blue.
                  </p>
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
}
