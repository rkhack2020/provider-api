import { Controller, Get, Param} from '@nestjs/common';
import { ProvidersService } from './providers.service';

@Controller('providers')
export class ProvidersController {
    constructor(private providersService: ProvidersService) { }

    @Get()
    async getProviders() {
        const provides = await this.providersService.getProviders();
        return provides;
    }

    @Get(':providerID')
    async getProvider(@Param('providerID') providerID) {
        const provider = await this.providersService.getProvider(providerID);
        return provider;
    }
}
