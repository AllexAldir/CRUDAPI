import { serve } from "./server/server";
import 'dotenv/config'

serve.listen(process.env.PORT || 8085, (): void => {
  console.log(`Chamada efetuada ${process.env.PORT}`) //Impoortação da chamadaz
})