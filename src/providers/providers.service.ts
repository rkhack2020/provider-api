import { PROVIDERS } from '../mock/mock.providers';
import { Injectable, HttpException } from '@nestjs/common';

@Injectable()
export class ProvidersService {
    providers = PROVIDERS;

   

    async getProviders() {
        return this.providers;
    }

    

    async getProvider(providerID) {
        let id = Number(providerID);

        const provider = this.providers.find(provider => provider.id === id);
        if (!provider) {
            throw new HttpException('Provider does not exist!', 404);
        }
        return provider;
    }

}
